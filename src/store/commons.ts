// 공통 상태관리
import {create} from "zustand/react";
import {CommonState, CommonStore, initialCommonState} from "@/types/common";


export const useCommonStore = create<CommonStore>(set => ({
    dropdownOpen: initialCommonState["dropdownOpen"],
    setDropdownOpen: (open: CommonState["dropdownOpen"]) => set({dropdownOpen: open}),
    isOpen: initialCommonState["isOpen"],
    setIsOpen: (open: CommonState["isOpen"]) => set({isOpen : open})
}))

export default useCommonStore;

