import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, Button, Center, Flex, Skeleton } from "@chakra-ui/react";
import { ReactMediaRecorder } from "react-media-recorder";

import { TalkPageEnum } from "@/router/talkRouter";
import { useMedia } from "@/hooks/useMedia";
import { useCountdownBar } from "@/hooks/useCountdownBar";
import { ChatBoxLayout } from "@/components/layout";
import { BubbleBox } from "@/components/box";
import { ToggleButton } from "@/components/button";
import { AudioPlaySlider } from "@/components/slider/audioPlaySlider/audioPlaySlider";
import { CountdownBar } from "@/components/countdownBar";

const ChatPage = () => {
    /* State */
    const [isRecording, setIsRecording] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const navigation = useNavigate();
    const { media, updateUserRecording } = useMedia();
    const { handleCountdownStart, handleCountdownStop, ...countdownFlow } = useCountdownBar({
        time: 10,
        isAutoStart: false,
    });

    /* Event */
    const handleStartRecording = (start: () => void) => {
        start();
        setIsRecording(true);
        handleCountdownStart();
    };

    const handleStopRecording = (stop: () => void) => {
        stop();
        setIsRecording(false);
        handleCountdownStop();
        setIsButtonDisabled(true);
    };

    return (
        <Container paddingY="50px" h="100vh">
            <Button
                onClick={() => {
                    navigation(TalkPageEnum.SUGGESTION);
                }}
            >
                下一頁
            </Button>
            <ReactMediaRecorder
                audio
                onStop={updateUserRecording}
                render={({ startRecording, stopRecording }) => {
                    return (
                        <>
                            <Box paddingBottom="30px">
                                <CountdownBar
                                    {...countdownFlow}
                                    onEnd={() => handleStopRecording(stopRecording)}
                                />
                            </Box>
                            <Box overflow="auto" h="70vh">
                                <ChatBoxLayout>
                                    {media.map((src, index) => (
                                        <BubbleBox key={index}>
                                            <AudioPlaySlider src={src} />
                                            <Flex direction={"row-reverse"}>
                                                <Button>文章</Button>
                                            </Flex>
                                        </BubbleBox>
                                    ))}
                                </ChatBoxLayout>
                            </Box>
                            <Center>
                                <Box position="fixed" bottom="30px">
                                    <>
                                        <ToggleButton
                                            width="70px"
                                            height="70px"
                                            borderRadius="50%"
                                            colorScheme={isRecording ? "red" : undefined}
                                            isDisabled={isButtonDisabled}
                                            isOnControlActive={isRecording}
                                            onActive={() => handleStartRecording(startRecording)}
                                            onStop={() => handleStopRecording(stopRecording)}
                                            childStop={
                                                <img src="/common/microphone.png" width="30px" />
                                            }
                                            childActive={<Skeleton width="30px" height="30px" />}
                                        />
                                    </>
                                </Box>
                            </Center>
                        </>
                    );
                }}
            />
        </Container>
    );
};

export default ChatPage;
