import React, { PropsWithChildren } from "react";

import { Box } from "@chakra-ui/react";

type BubbleBoxProps = React.ComponentProps<typeof Box> & PropsWithChildren;

export const BubbleBox = React.forwardRef<HTMLDivElement, BubbleBoxProps>(
    ({ children, ...rest }, ref) => {
        return (
            <Box
                ref={ref}
                w="250px"
                position="relative"
                border="1px solid gray"
                borderRadius="lg"
                padding="10px"
                {...rest}
            >
                {children}
            </Box>
        );
    },
);

BubbleBox.displayName = "BubbleBox";
