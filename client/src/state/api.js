import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: [
        "User",
        "Products",
        "Customers",
        "Transactions",
        "Bill",
        "Auth"
    ],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
        }),
        getProducts: build.query({
            query: () => "client/products",
            providesTags: ["Products"],
        }),
        getCustomers: build.query({
            query: () => "client/customers",
            providesTags: ["Customers"],
        }),
        getTransactions: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: "client/transactions",
                method: "GET",
                params: { page, pageSize, sort, search },
            }),
            providesTags: ["Transactions"],
        }),
        getQuartos: build.query({
            query: () => "client/bill",
            providesTags: ["Bill"],
        }),
        getLogin: build.query({
            query: ({ email, password }) => ({
                url: "auth/login",
                method: "POST",
                headers: { "Content-Type" : "Application/json" },
                body: JSON.stringify({ email, password }),
            }),
            providesTags: ["Auth"],
        }),
    }),
});

export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetQuartosQuery,
    useGetLoginQuery
} = api;

