import { useEffect, useState, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Container, Box, Button, Center, Flex, Skeleton, useDisclosure } from "@chakra-ui/react";
import { ReactMediaRecorder } from "react-media-recorder";
import { last } from "lodash";

import { useMedia } from "@/hooks/useMedia";
import { useCountdownBar } from "@/hooks/useCountdownBar";
import { useChatId } from "@/hooks/useChatId";
import { useStartGptChat, useContinuousGptChat } from "@/queries/useGptChat";
import { ChatBoxLayout } from "@/components/layout";
import { BubbleBox } from "@/components/box";
import { ToggleButton } from "@/components/button";
import { AudioPlaySlider } from "@/components/slider/audioPlaySlider/audioPlaySlider";
import { CountdownBar } from "@/components/countdownBar";

import { ArticleModal } from "./modal";

const ChatPage = () => {
    /* Hook */
    const location = useLocation();
    const startGptChatMutation = useStartGptChat();
    const continuousGptChatMutation = useContinuousGptChat();
    const { onOpen, ...disclosure } = useDisclosure();
    const {
        media,
        userRecording,
        chatGptRecording,
        updateUserRecording,
        updateUserLastArticle,
        updateChatGptRecording,
    } = useMedia();
    const { chatId, setChatId } = useChatId();

    /* State */
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    const [article, setArticle] = useState<string | ReactNode>("");
    const { scenario } = location.state;

    const { handleCountdownStart, handleCountdownStop, ...countdownFlow } = useCountdownBar({
        time: 10,
        isAutoStart: false,
    });

    useEffect(() => {
        if (!chatGptRecording.length) {
            handleFirstChat();
        }
        if (userRecording.length && userRecording.length === chatGptRecording.length) {
            handleContinuousChat();
        }
    }, [userRecording, chatGptRecording]);

    /* Event */
    const handleFirstChat = () => {
        startGptChatMutation.mutate(
            { scenario },
            {
                onSuccess: (data: { data: { chat_id: string; tts: string; content: string } }) => {
                    setChatId(data.data.chat_id);
                    updateChatGptRecording({
                        base64: data.data.tts,
                        article: data.data.content,
                    });
                    setIsButtonDisabled(false);
                },
            },
        );
    };

    const handleContinuousChat = () => {
        const lastRecording = last(userRecording)?.base64;
        if (!lastRecording) return;
        continuousGptChatMutation.mutate(
            {
                chat_id: chatId,
                user_input_base64: lastRecording,
            },
            {
                onSuccess: (data: {
                    data: { tts: string; content: string; user_input: string };
                }) => {
                    updateUserLastArticle(data.data.user_input);
                    updateChatGptRecording({ base64: data.data.tts, article: data.data.content });
                    setIsButtonDisabled(false);
                },
            },
        );
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
        <>
            <Container paddingY="50px" h="100vh" maxW="container.lg">
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
                                                <AudioPlaySlider src={src.base64} />
                                                <Flex direction={"row-reverse"}>
                                                    <Button
                                                        onClick={() => {
                                                            onOpen();
                                                            setArticle(src.article);
                                                        }}
                                                    >
                                                        文章
                                                    </Button>
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
                                                onActive={() =>
                                                    handleStartRecording(startRecording)
                                                }
                                                onStop={() => handleStopRecording(stopRecording)}
                                                childStop={
                                                    <img
                                                        src="/common/microphone.png"
                                                        width="30px"
                                                    />
                                                }
                                                childActive={
                                                    <Skeleton width="30px" height="30px" />
                                                }
                                            />
                                        </>
                                    </Box>
                                </Center>
                            </>
                        );
                    }}
                />
            </Container>
            <ArticleModal {...disclosure}>{article}</ArticleModal>
        </>
    );
};

export default ChatPage;
