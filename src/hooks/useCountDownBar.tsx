import { useState } from "react";

export enum BarState {
    Active = "active",
    Rest = "rest",
}

export type BarStateType = BarState.Active | BarState.Rest;

export const useCountDownBar = (isAutoStart?: boolean) => {
    /* State */
    const [state, setState] = useState<BarStateType>(isAutoStart ? BarState.Active : BarState.Rest);
    const [resetKey, setResetKey] = useState(0);

    /* Event */
    const handleReset = () => {
        // 更新 resetKey，這裡使用數字，每次點擊增加 1
        setResetKey((prevKey) => prevKey + 1);
        // 同時設置狀態為 'active' 以啟動倒數計時
        setState(BarState.Active);
    };

    return { resetKey, handleReset, state, setState };
};
