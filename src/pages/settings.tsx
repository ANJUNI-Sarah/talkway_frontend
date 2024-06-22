import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Select, VStack, Container, Center, Text, Button, Stack } from "@chakra-ui/react";
import { sample } from "lodash";

import { TalkPageEnum } from "@/router/talkRouter/enum";
import { chatScenario } from "@/utils/common/chat/scenario";
import { ChatType } from "@/utils/common/chat/types";

const SettingsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [chatTime, setChatTime] = useState<number>(10);
    const chatType: ChatType = location.state.chatType;
    const scenario = sample(chatScenario[chatType]);

    /* Event */
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setChatTime(parseInt(event.target.value));
    };

    const handleClick = () => {
        navigate(TalkPageEnum.CHAT, { state: { scenario, chatTime } });
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
                            defaultValue={chatTime}
                        >
                            <option value={5}>5分鐘</option>
                            <option value={10}>10分鐘</option>
                            <option value={20}>20分鐘</option>
                        </Select>
                    </Center>
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
