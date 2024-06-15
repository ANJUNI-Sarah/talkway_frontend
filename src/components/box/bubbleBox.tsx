import React, { PropsWithChildren } from "react";

import { VStack } from "@chakra-ui/react";

type BubbleBoxProps = React.ComponentProps<typeof VStack> & PropsWithChildren;

export const BubbleBox = React.forwardRef<HTMLDivElement, BubbleBoxProps>(
    ({ children, ...rest }, ref) => {
        return (
            <VStack
                ref={ref}
                w="250px"
                position="relative"
                border="1px solid gray"
                borderRadius="lg"
                padding="10px"
                spacing={4}
                align="stretch"
                {...rest}
            >
                {children}
            </VStack>
        );
    },
);

BubbleBox.displayName = "BubbleBox";
