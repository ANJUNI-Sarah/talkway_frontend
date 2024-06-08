// import React, { useState } from "react";
import { Container, Box, Button, Center, Flex } from "@chakra-ui/react";

import { ChatBoxLayout } from "@/components/layout";
import { CountdownBar } from "@/components/countdownBar";
import { BubbleBox } from "@/components/box";
import { useCountDownBar } from "@/hooks/useCountDownBar";

import { AudioPlaySlider } from "@/components/slider/audioPlaySlider";

const ChatPage = () => {
    const { handleReset, ...countDownFlow } = useCountDownBar({ time: 10 });

    return (
        <Container paddingY="50px">
            <CountdownBar {...countDownFlow} />
            <ChatBoxLayout>
                <BubbleBox>
                    <AudioPlaySlider
                        src={"https://www.bensound.com/bensound-music/bensound-memories.mp3"}
                    />
                    <Flex direction={"row-reverse"}>
                        <Button>文章</Button>
                    </Flex>
                </BubbleBox>
                <BubbleBox>
                    <AudioPlaySlider
                        src={"https://www.bensound.com/bensound-music/bensound-memories.mp3"}
                    />
                    <Flex direction={"row-reverse"}>
                        <Button>文章</Button>
                    </Flex>
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
