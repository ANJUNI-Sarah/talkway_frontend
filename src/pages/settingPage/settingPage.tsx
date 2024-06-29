import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    Select,
    VStack,
    Container,
    Center,
    Text,
    Button,
    Stack,
    // Radio,
    // RadioGroup,
    // Accordion,
    // AccordionItem,
    // AccordionButton,
    // AccordionPanel,
    // AccordionIcon,
} from "@chakra-ui/react";
import { sample } from "lodash";

import { TalkPageEnum } from "@/router/talkRouter/enum";
import { chatScenario } from "@/utils/common/chat/scenario";
import { ChatType } from "@/utils/common/chat/types";

const SettingsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const chatTimeRef = useRef<number>(10);
    const chatType: ChatType = location.state.chatType;
    const scenario = sample(chatScenario[chatType]);

    /* Event */
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        chatTimeRef.current = parseInt(event.target.value);
    };

    const handleClick = () => {
        navigate(TalkPageEnum.CHAT, { state: { scenario, chatTime: chatTimeRef.current } });
    };

    return (
        <Container>
            <VStack justify="center" spacing={20} height="100vh">
                <Text>{scenario}</Text>
                <Stack w={"100%"} spacing={10}>
                    <Center>
                        <Text>目標時間：</Text>
                        <Select
                            boxShadow="lg"
                            border="1px"
                            flex="1"
                            onChange={handleSelect}
                            defaultValue={chatTimeRef.current}
                        >
                            <option value={5}>5分鐘</option>
                            <option value={10}>10分鐘</option>
                            <option value={20}>20分鐘</option>
                        </Select>
                    </Center>
                    {/* <Accordion allowMultiple>
                        <AccordionItem>
                            <AccordionButton>
                                <Center as="span" flex="1" textAlign="left">
                                    進階設定
                                </Center>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                <Stack spacing={5}>
                                    <Center>
                                        <Text>性別：</Text>
                                        <RadioGroup>
                                            <Stack direction="row">
                                                <Radio value="1">First</Radio>
                                                <Radio value="2">Second</Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </Center>
                                    <Center>
                                        <Text>口音：</Text>
                                        <Select
                                            boxShadow="md"
                                            border="1px"
                                            flex="1"
                                            onChange={handleSelect}
                                            defaultValue={chatTimeRef.current}
                                        >
                                            <option value={5}>5分鐘</option>
                                            <option value={10}>10分鐘</option>
                                            <option value={20}>20分鐘</option>
                                        </Select>
                                    </Center>
                                    <Center>
                                        <Text>語速：</Text>
                                        <Select
                                            boxShadow="md"
                                            border="1px"
                                            flex="1"
                                            onChange={handleSelect}
                                            defaultValue={chatTimeRef.current}
                                        >
                                            <option value={"0.5"}>X0.5</option>
                                            <option value={"0.75"}>X0.75</option>
                                            <option value={"1"}>X1</option>
                                            <option value={"1.25"}>X1.25</option>
                                            <option value={"1.5"}>X1.5</option>
                                        </Select>
                                    </Center>
                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion> */}
                    <Button
                        colorScheme="brand"
                        w="100%"
                        size="lg"
                        fontSize="xl"
                        onClick={handleClick}
                    >
                        開始
                    </Button>
                </Stack>
            </VStack>
        </Container>
    );
};

export default SettingsPage;
