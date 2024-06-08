import { map } from "lodash";
import { Stack, Button, Center, Text, Select, VStack, Container, Link } from "@chakra-ui/react";

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
        <VStack height="100vh" align="center" justify="center">
            <Container>
                <Center paddingBottom="50px">
                    <Text fontWeight="550" fontSize="36px">
                        歡迎回來！
                    </Text>
                </Center>
                <Center paddingBottom="30px">
                    <Text>主題：</Text>
                    <Select flex="1" boxShadow="lg" border="1px">
                        {map(talkType, Option)}
                    </Select>
                </Center>
                <Stack>
                    <Link href="/talk/settings">
                        <Button colorScheme="brand" w="100%">
                            開始對話
                        </Button>
                    </Link>
                    <Button colorScheme="brand" isDisabled={true}>
                        回饋建議
                    </Button>
                </Stack>
            </Container>
        </VStack>
    );
};

export default HomePage;
