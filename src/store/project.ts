import {create} from "zustand/react";

interface State {
    id: number;
}

interface Actions {
    actions: {
        test: () => void;
    }
}

const initialState: State = {
    id: 0

}

export const useProjectStore = create<State & Actions>(set => ({
    ...initialState,
    actions: {
        test: () => set({})
    }
}))