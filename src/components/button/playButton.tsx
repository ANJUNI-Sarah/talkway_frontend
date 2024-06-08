import { Button } from "@chakra-ui/react";
import { forwardRef, HTMLAttributes, useMemo, useState } from "react";

type PlayButtonProps = {
    isAutoPlay?: boolean;
    isPlayControl?: boolean;
    onPlay?: () => void;
    onStop?: () => void;
} & HTMLAttributes<HTMLButtonElement>;

export const PlayButton = forwardRef<HTMLButtonElement, PlayButtonProps>(
    ({ isPlayControl, isAutoPlay, onPlay, onStop, ...props }, ref) => {
        /* State */
        const isControl = isPlayControl && onStop && onPlay;
        const [innerIsPlay, setInnerIsPlay] = useState<boolean>(
            isAutoPlay || isPlayControl || false,
        );
        const isPlay = useMemo(
            () => (isControl ? isPlayControl : innerIsPlay),
            [isControl, isPlayControl, innerIsPlay],
        );

        /* Event */
        const stop = () => (isControl ? onStop() : setInnerIsPlay(false));
        const play = () => (isControl ? onPlay() : setInnerIsPlay(true));
        const handleClick = () => (isPlay ? stop() : play());

        // TODO: play/stop icon
        return (
            <Button ref={ref} {...props} onClick={handleClick}>
                {isPlay ? "Stop" : "Play"}
            </Button>
        );
    },
);

PlayButton.displayName = "PlayButton";
