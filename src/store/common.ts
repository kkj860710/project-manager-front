// 공통 상태관리
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

export const useCommonStore = create<State & Actions>(set => ({
    ...initialState,
    actions: {
        test: () => set({})
    }
}))