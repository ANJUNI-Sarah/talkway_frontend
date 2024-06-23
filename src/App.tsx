import { Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useErrorBoundary } from "react-use-error-boundary";

import router from "@/router/routes";
import { Loading } from "@/components/loading";
import { useLoadingDecorator, loadingState } from "@/hooks/useLoadingDecorator";

//  Suspense fallback 時觸發 loading, 並在 unmount 時結束 loading
const LoadingFallback = () => {
    const { startLoading, endLoading } = useLoadingDecorator();

    useEffect(() => {
        startLoading();

        return () => {
            endLoading();
        };
    }, []);

    return null;
};

function App() {
    const [error] = useErrorBoundary((error, errorInfo) => console.error(error, errorInfo));
    const { isLoading } = loadingState();

    if (error) {
        return (
            <div>
                <p>錯誤</p>
            </div>
        );
    }

    console.log("isLoading", isLoading());
    return (
        <>
            <Loading isLoading={isLoading()} />
            <Suspense fallback={<LoadingFallback />}>
                <RouterProvider router={router} />
            </Suspense>
        </>
    );
}

export default App;
