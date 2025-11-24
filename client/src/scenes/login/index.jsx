import React, { useState } from "react";
import { useTheme } from "@mui/material";
import useAuth from "../../useAuth";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
    const theme = useTheme();

    const navigate = useNavigate();
    const { login } = useAuth();
    const { state } = useLocation();

    const handleLogin = () => {
        login().then(() => {
            navigate(state?.path || "/dashboard");
        });
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Log in</button>
        </div>
    );
}

export default Login;