import React, { PropsWithChildren, Children } from "react";

import { Flex, VStack } from "@chakra-ui/react";

type chatBoxLayoutProps = React.ComponentProps<typeof VStack> & PropsWithChildren;

export const ChatBoxLayout = React.forwardRef<HTMLDivElement, chatBoxLayoutProps>(
    ({ children, ...rest }, ref) => {
        return (
            <VStack py={5} spacing={10} ref={ref} {...rest}>
                {Children.map(children, (child, idx) => (
                    <Flex w="100%" flexDirection={idx % 2 === 0 ? "row" : "row-reverse"}>
                        {child}
                    </Flex>
                ))}
            </VStack>
        );
    },
);

ChatBoxLayout.displayName = "ChatBoxLayout";
