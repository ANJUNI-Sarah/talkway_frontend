import { Spinner, Box } from "@chakra-ui/react";

type LoadingProps = {
    isLoading: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Loading = ({ isLoading }: LoadingProps) => {
    if (!isLoading) {
        return null;
    }

    return (
        <Box
            width="100vw"
            height="100vh"
            alignItems="center"
            justifyContent="center"
            display="flex"
            position="relative"
        >
            <Box bg="gray.500" opacity="0.2" width="100vw" height="100vh" position="fixed" />
            <Spinner color="brand.500" size="xl" speed="0.7s" />
        </Box>
    );
};
