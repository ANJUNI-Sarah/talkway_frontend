import { keyframes, Box } from "@chakra-ui/react";
import { forwardRef, HTMLAttributes, useEffect, useMemo, Key } from "react";
import { BarState, BarStateType } from "@/hooks/_useCountdownBar";

type CountDownBarProps = {
    time: number; // 單位：秒
    state: BarStateType; // 狀態：active, rest
    resetKey: Key; // uuid，用於識別是否需重新渲染
    setState: (state: BarStateType) => void;
    onStart?: () => void;
    onEnd?: () => void;
} & HTMLAttributes<HTMLDivElement>;

const horizontal = keyframes`  
    from {transform: translateX(-100%);}
    to {=transform: translateX(0%);} 
`;

export const CountdownBar = forwardRef<HTMLDivElement, CountDownBarProps>(
    ({ state, time, resetKey, onStart, onEnd, setState, ...props }, ref) => {
        /* State */
        const isRest = useMemo(() => state === BarState.Rest, [state]);
        const animation = useMemo(() => `${horizontal} ${time}s linear`, [time]);

        /* Event */
        const onAnimationEnd = () => {
            onEnd && onEnd();
            setState(BarState.Rest);
        };

        useEffect(() => {
            if (state === BarState.Active) {
                onStart && onStart();
            }
        }, [onStart, state]);

        return (
            <>
                <Box
                    key={resetKey}
                    maxW="100%"
                    border={"2px solid gray"}
                    borderRadius={"lg"}
                    h="20px"
                    ref={ref}
                    overflow="hidden"
                    opacity={isRest ? 0.5 : 1}
                    backgroundColor="gray.100"
                >
                    {!isRest ? (
                        <Box
                            animation={animation}
                            onAnimationEnd={onAnimationEnd}
                            w="100%"
                            h="100%"
                            backgroundColor="brand.500"
                            {...props}
                        />
                    ) : (
                        <Box w="100%" h="100%" backgroundColor="brand.100" {...props} />
                    )}
                </Box>
            </>
        );
    },
);

CountdownBar.displayName = "CountDownBar";
