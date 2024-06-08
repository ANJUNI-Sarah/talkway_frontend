// import React, { useState } from "react";
import { Container, Box, Button, Center } from "@chakra-ui/react";

import { ChatBoxLayout } from "@/components/layout";
import { CountdownBar } from "@/components/countdownBar";
import { ToggleButton } from "@/components/button/ToggleButton";
import { BubbleBox } from "@/components/box";
import { useCountDownBar } from "@/hooks/useCountDownBar";

const ChatPage = () => {
    const { handleReset, ...countDownFlow } = useCountDownBar({ time: 10 });

    return (
        <Container paddingY="50px">
            <CountdownBar {...countDownFlow} />
            <ChatBoxLayout>
                <BubbleBox>
                    <ToggleButton />
                </BubbleBox>
                <BubbleBox>
                    <ToggleButton />
                </BubbleBox>
            </ChatBoxLayout>
            <Center>
                <Box position="fixed" bottom="80px">
                    <Button onClick={handleReset}>Reset</Button>
                </Box>
            </Center>
        </Container>
    );
};

export default ChatPage;
