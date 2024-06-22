import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Box, Button, Center, Flex, Skeleton } from "@chakra-ui/react";
import { ReactMediaRecorder } from "react-media-recorder";
import { last } from "lodash";

import { useMedia } from "@/hooks/useMedia";
import { useCountdownBar } from "@/hooks/useCountdownBar";
import { useStartGptChat, useContinuousGptChat } from "@/queries/useGptChat";

import { ChatBoxLayout } from "@/components/layout";
import { BubbleBox } from "@/components/box";
import { ToggleButton } from "@/components/button";
import { AudioPlaySlider } from "@/components/slider/audioPlaySlider/audioPlaySlider";
import { CountdownBar } from "@/components/countdownBar";

const ChatPage = () => {
    /* Hook */
    const location = useLocation();
    const startGptChatMutation = useStartGptChat();
    const continuousGptChatMutation = useContinuousGptChat();
    const { media, userRecording, updateUserRecording, updateChatGptRecording } = useMedia();

    /* State */
    const [chatID, setChatID] = useState<string>("");
    const [isCanChat, setIsCanChat] = useState<boolean>(false);
    const [isRecording, setIsRecording] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const { scenario, chatTime } = location.state;

    const { handleCountdownStart, handleCountdownStop, ...countdownFlow } = useCountdownBar({
        time: 10,
        isAutoStart: false,
    });

    console.log(isCanChat, chatTime);

    useEffect(() => {
        if (media.length > 0) {
            continuousGptChatMutation.mutate(
                { chat_id: chatID, user_input: last(userRecording) || "" },
                {
                    onSuccess: handleGptChatOnSuccess,
                },
            );
        }
    }, [media]);

    useEffect(() => {
        startGptChatMutation.mutate(
            { scenario },
            {
                onSuccess: handleGptChatOnSuccess,
            },
        );
    }, []);

    /* Event */
    const handleGptChatOnSuccess = (data: { data: { chat_id: string; tts: string } }) => {
        setChatID(data.data.chat_id);
        updateChatGptRecording(data.data.tts);
        setIsCanChat(true);
    };

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
