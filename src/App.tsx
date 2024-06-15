import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

import router from "@/router/routes";

function App() {
    return (
        <Suspense fallback={<Spinner color="brand.500" />}>
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;
