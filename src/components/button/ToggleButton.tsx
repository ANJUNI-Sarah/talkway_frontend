import { Button, ButtonProps } from "@chakra-ui/react";
import { forwardRef, HTMLAttributes, useMemo, useState } from "react";

type ToggleButtonProps = {
    iconOnActive?: string;
    iconOnStop?: string;
    isAutoActive?: boolean;
    isOnControlActive?: boolean;
    onActive?: () => void;
    onStop?: () => void;
    childActive?: React.ReactNode;
    childStop?: React.ReactNode;
} & HTMLAttributes<HTMLButtonElement> &
    ButtonProps;

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
    (
        {
            isOnControlActive,
            isAutoActive,
            onActive,
            onStop,
            childActive = "Play",
            childStop = "Stop",
            ...props
        },
        ref,
    ) => {
        /* State */
        const isControl = isOnControlActive !== undefined && onStop && onActive;
        const [innerIsActive, setInnerIsActive] = useState<boolean>(isAutoActive || false);
        const isPlay = useMemo(
            () => (isControl ? isOnControlActive : innerIsActive),
            [isControl, isOnControlActive, innerIsActive],
        );

        /* Event */
        const stop = () => (isControl ? onStop() : setInnerIsActive(false));
        const active = () => (isControl ? onActive() : setInnerIsActive(true));
        const handleClick = () => (isPlay ? stop() : active());

        return (
            <Button ref={ref} {...props} onClick={handleClick}>
                {isPlay ? childActive : childStop}
            </Button>
        );
    },
);

ToggleButton.displayName = "ToggleButton";
