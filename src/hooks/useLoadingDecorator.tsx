import { useId } from "react";
import { create } from "zustand";

// 管理 loading 狀態，裡面有值就代表需要開啟 loading
type State = {
    loading: Set<string>;
    isLoading: () => boolean;
};

type Action = {
    addLoadingState: (id: string) => void;
    deleteLoadingState: (id: string) => void;
};

export const loadingState = create<State & Action>((set, get) => ({
    loading: new Set(),
    isLoading: () => get().loading.size > 0,
    addLoadingState: (id) => set((state) => ({ loading: new Set(state.loading).add(id) })),
    deleteLoadingState: (id) =>
        set((state) => {
            state.loading.delete(id);
            return { loading: new Set(state.loading) };
        }),
}));

export const useLoadingDecorator = () => {
    const { addLoadingState, deleteLoadingState, isLoading } = loadingState();
    const id = useId();

    const startLoading = () => addLoadingState(id);
    const endLoading = () => deleteLoadingState(id);

    return {
        startLoading,
        endLoading,
        isLoading,
    };
};
