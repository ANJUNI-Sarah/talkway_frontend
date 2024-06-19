import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ErrorBoundaryContext } from "react-use-error-boundary";

import { theme } from "./theme.tsx";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ErrorBoundaryContext>
                <App />
            </ErrorBoundaryContext>
        </ChakraProvider>
    </React.StrictMode>,
);
