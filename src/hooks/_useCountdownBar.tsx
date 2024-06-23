import { useState } from "react";

export enum BarState {
    Active = "active",
    Rest = "rest",
}

export type BarStateType = BarState.Active | BarState.Rest;

type UseCountdownBar = {
    time: number;
    isAutoStart?: boolean;
    onCountdownStop?: () => void;
    onCountdownStart?: () => void;
};

export const useCountdownBar = ({
    time,
    isAutoStart = true,
    onCountdownStop,
    onCountdownStart,
}: UseCountdownBar) => {
    /* State */
    const [state, setState] = useState<BarStateType>(isAutoStart ? BarState.Active : BarState.Rest);
    const [resetKey, setResetKey] = useState(0);

    /* Event */
    const handleCountdownStart = () => {
        // 更新 resetKey，這裡使用數字，每次點擊增加 1
        setResetKey((prevKey) => prevKey + 1);
        // 同時設置狀態為 'active' 以啟動倒數計時
        setState(BarState.Active);
        if (onCountdownStop) {
            onCountdownStop();
        }
    };

    const handleCountdownStop = () => {
        // 設置狀態為 'rest' 以停止倒數計時
        setState(BarState.Rest);
        if (onCountdownStart) {
            onCountdownStart();
        }
    };

    return { time, resetKey, handleCountdownStart, handleCountdownStop, state, setState };
};
