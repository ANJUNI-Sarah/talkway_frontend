import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { ErrorBoundaryContext } from "react-use-error-boundary";

import { theme } from "./theme.tsx";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            gcTime: 5 * (60 * 1000),
            staleTime: 0 * (3 * 1000),
            retry: 0,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <ErrorBoundaryContext>
                    <App />
                </ErrorBoundaryContext>
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
