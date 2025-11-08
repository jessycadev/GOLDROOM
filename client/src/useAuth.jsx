import React, { useState } from "react";
import { useTheme } from "@mui/material";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

const authContext = React.createContext();

const useAuth = () => {
    const theme = useTheme();

    const [authed, setAuthed] = React.useState(false);

    return {
        authed,
        login() {
            return new Promise((res) => {
                setAuthed(true);
                res();
            });
        },
        logout() {
            return new Promise((res) => {
                setAuthed(false);
                res();
            });
        },
    };
}

export function AuthProvider({ children }) {
    const auth = useAuth();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
    return React.useContext(authContext);
}

function RequireAuth({ children }) {
    const { authed } = useAuth();
    const location = useLocation();

    return authed === true
        ? children
        : <Navigate to="/login" replace />;
}

