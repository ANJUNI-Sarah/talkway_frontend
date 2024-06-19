import { join, resolve } from "path";

const input = join("@", "server", "openapi", "openapi.json");
const output = resolve("@", "client", "src", "sdk");

export const sdk = {
    output: {
        clean: true,
        prettier: true,
        mode: "tags-split",
        target: join(output, "api"),
        schemas: join(output, "schemas"),
        client: "swr",
    },
    input: {
        target: input,
    },
};
