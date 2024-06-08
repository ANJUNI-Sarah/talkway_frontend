import { map } from "lodash";
import { Button, Center, Text, Select, Stack, Container, Link } from "@chakra-ui/react";

type talkTypeObject = {
    key: string;
    value: string;
};

const talkType: talkTypeObject[] = [
    { key: "job", value: "工作" },
    { key: "company", value: "公司" },
    { key: "location", value: "地點" },
    { key: "category", value: "類別" },
    { key: "level", value: "等級" },
    { key: "language", value: "語言" },
    { key: "tool", value: "工具" },
];

const Option = (option: talkTypeObject) => (
    <option key={option.key} value={option.value}>
        {option.value}
    </option>
);

const HomePage = () => {
    return (
        <Container>
            <Center>
                <Stack spacing={4} w="100%">
                    <Center>
                        <Text fontWeight="550" fontSize="32px">
                            歡迎回來！
                        </Text>
                    </Center>
                    <Center>
                        <Text>主題：</Text>
                        <Select flex="1" boxShadow="lg" border="1px">
                            {map(talkType, Option)}
                        </Select>
                    </Center>
                    <Button colorScheme="brand">
                        <Link href="/talk/settings">開始對話</Link>
                    </Button>
                    <Button colorScheme="brand" isDisabled={true}>
                        回饋建議
                    </Button>
                </Stack>
            </Center>
        </Container>
    );
};

export default HomePage;
