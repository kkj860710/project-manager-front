import {create} from "zustand/react";
import {initialUserListState, UserListState, UserListStore} from "@/types/user";



export const useUserStore = create<UserListStore>(set => ({
    user: initialUserListState,
    setUser: (newUser: UserListState) => set({user: newUser}),
    userList: [],
    setUserList: (newUserList : UserListState[]) =>
        set(
            {userList: newUserList}
        ),
    selectedUsers: [],
    setSelectedUsers: (newUserList : UserListState[]) =>
        set(
            {selectedUsers: newUserList}
        ),
    availableUsers: [],
    setAvailableUsers: (newUserList : UserListState[]) =>
        set(
            {availableUsers: newUserList}
        ),
}))

export default useUserStore;