import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

import { useErrorBoundary } from "react-use-error-boundary";

import router from "@/router/routes";

function App() {
    const [error] = useErrorBoundary((error, errorInfo) => console.error(error, errorInfo));

    if (error) {
        return (
            <div>
                <p>錯誤</p>
            </div>
        );
    }

    return (
        <Suspense fallback={<Spinner color="brand.500" />}>
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;
