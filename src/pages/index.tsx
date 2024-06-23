import { ChangeEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { map } from "lodash";
import { Stack, Button, Text, Select, VStack, Container, Center } from "@chakra-ui/react";

import { ChatType } from "@/utils/common/chat/types";
import { TalkPageEnum } from "@/router/talkRouter/enum";

type ChatTypeOptionsType = {
    key: ChatType;
    value: string;
};

const ChatTypeOptions: ChatTypeOptionsType[] = [
    { key: ChatType.travel, value: "旅遊" },
    { key: ChatType.workout, value: "運動" },
    { key: ChatType.study, value: "學習" },
    { key: ChatType.entertainment, value: "娛樂" },
    { key: ChatType.news, value: "新聞" },
    { key: ChatType.shopping, value: "購物" },
    { key: ChatType.career, value: "事業" },
    { key: ChatType.social, value: "社交" },
    { key: ChatType.food, value: "美食" },
];

const Option = (option: ChatTypeOptionsType) => (
    <option key={option.key} value={option.key}>
        {option.value}
    </option>
);

const HomePage = () => {
    const navigate = useNavigate();
    const selectedRef = useRef<ChatType>(ChatType.travel);

    /* Event */
    const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        selectedRef.current = event.target.value as ChatType;
    };

    const handleClick = () => {
        navigate(TalkPageEnum.SETTINGS, { state: { chatType: selectedRef.current } });
    };

    return (
        <Container>
            <VStack height="100vh" align="center" justify="center" spacing={10}>
                <Text fontWeight="550" fontSize="36px">
                    歡迎回來！
                </Text>
                <Center w="100%">
                    <Text>主題：</Text>
                    <Select
                        flex="1"
                        boxShadow="lg"
                        border="1px"
                        onChange={handleSelect}
                        defaultValue={selectedRef.current}
                    >
                        {map(ChatTypeOptions, Option)}
                    </Select>
                </Center>
                <Stack w="100%" spacing={5}>
                    <Button colorScheme="brand" onClick={handleClick} size="lg" fontSize="lg">
                        開始對話
                    </Button>
                    <Button colorScheme="brand" isDisabled={true}>
                        回饋建議
                    </Button>
                </Stack>
            </VStack>
        </Container>
    );
};

export default HomePage;
