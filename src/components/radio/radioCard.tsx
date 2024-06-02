import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import { Box, useRadio, UseRadioProps } from "@chakra-ui/react";

type RadioCardProps = {
    useRadioProps: UseRadioProps;
} & HTMLAttributes<HTMLDivElement> &
    PropsWithChildren;

export const RadioCard = forwardRef<HTMLDivElement, RadioCardProps>(
    ({ children, useRadioProps, ...rest }, ref) => {
        const { getInputProps, getRadioProps } = useRadio(useRadioProps);

        const input = getInputProps();
        const checkbox = getRadioProps();

        return (
            <Box as="label" ref={ref} {...rest}>
                <input {...input} />
                <Box
                    {...checkbox}
                    cursor="pointer"
                    borderWidth="1px"
                    borderRadius="md"
                    boxShadow="md"
                    _checked={{
                        color: "white",
                    }}
                    _focus={{
                        boxShadow: "outline",
                    }}
                    px={5}
                    py={3}
                >
                    {children}
                </Box>
            </Box>
        );
    },
);

RadioCard.displayName = "RadioCard";
