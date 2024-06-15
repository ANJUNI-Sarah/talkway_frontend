import { Container, Center, VStack, Flex, Box } from "@chakra-ui/react";

import { useMedia } from "@/hooks/useMedia";
import { BubbleBox } from "@/components/box";
import { AudioPlaySlider } from "@/components/slider/audioPlaySlider/audioPlaySlider";

const SuggestionPage = () => {
    const {
        userRecording,
        // chatGptRecording,
        // suggestionRecording
    } = useMedia();

    return (
        <Container paddingY="50px" h="100vh">
            <Center>
                <h1>建議回饋</h1>
            </Center>
            <Flex>
                <VStack>
                    <Box>上一句是</Box>
                    <Box>你這樣說</Box>
                    <Box>
                        {userRecording.map((src, index) => (
                            <BubbleBox key={index}>
                                <AudioPlaySlider src={src} />
                            </BubbleBox>
                        ))}
                    </Box>
                </VStack>
                <VStack>
                    <Box>這樣說更好</Box>
                    <Box>這樣說更道地</Box>
                </VStack>
            </Flex>
        </Container>
    );
};

export default SuggestionPage;
