import { VStack, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";

export const BaseLayout = () => {
    return (
        <VStack spacing="12" h="100vh">
            <Header />
            <Container flex="1">
                <Outlet />
            </Container>
            <Footer />
        </VStack>
    );
};
