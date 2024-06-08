import { Button } from "@chakra-ui/react";
import { forwardRef, HTMLAttributes, useMemo, useState } from "react";

type ToggleButtonProps = {
    iconOnActive?: string;
    iconOnStop?: string;
    isAutoPlay?: boolean;
    isOnControl?: boolean;
    onActive?: () => void;
    onStop?: () => void;
} & HTMLAttributes<HTMLButtonElement>;

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
    ({ isOnControl, isAutoPlay, onActive, onStop, ...props }, ref) => {
        /* State */
        const isControl = isOnControl && onStop && onActive;
        const [innerIsPlay, setInnerIsPlay] = useState<boolean>(isAutoPlay || isOnControl || false);
        const isPlay = useMemo(
            () => (isControl ? isOnControl : innerIsPlay),
            [isControl, isOnControl, innerIsPlay],
        );

        /* Event */
        const stop = () => (isControl ? onStop() : setInnerIsPlay(false));
        const active = () => (isControl ? onActive() : setInnerIsPlay(true));
        const handleClick = () => (isPlay ? stop() : active());

        // TODO: play/stop icon
        return (
            <Button ref={ref} {...props} onClick={handleClick}>
                {isPlay ? "Stop" : "Play"}
            </Button>
        );
    },
);

ToggleButton.displayName = "ToggleButton";
