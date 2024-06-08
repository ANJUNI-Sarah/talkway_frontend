import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";

import "react-h5-audio-player/lib/styles.css";

/** 参考:
 * https://lhz516.github.io/react-h5-audio-player/?path=/docs/layouts-advanced--stacked
 **/

type AudioPlaySliderProps = {
    src: string; // 音源(base64)
};

export const AudioPlaySlider = ({ src }: AudioPlaySliderProps) => {
    return (
        <AudioPlayer
            src={src}
            autoPlayAfterSrcChange={false}
            className="box-shadow-none"
            layout="horizontal-reverse"
            showJumpControls={false}
            customProgressBarSection={[RHAP_UI.PROGRESS_BAR]} // 讓佈局只剩下播放進度條
            customControlsSection={[RHAP_UI.MAIN_CONTROLS]} // 讓佈局只剩下播放按鈕
        />
    );
};
