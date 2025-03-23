export interface UserState {
    id?: number,
    userId?: string,
    username? : string,
    email : string,
    password? : string,
    passwordConfirm? : string,
    role? : string,
    iat? : number,
    exp? : number,
    jti? : string,
}

export interface UserListState {
    id?: number,
    userId: string,
    username: string,
}

export const initialUserListState: UserListState = {
    id: 0,
    userId: '',
    username: '',
}

export interface UserListStore {
    user: UserListState;
    setUser: (newUser: UserListState) => void;
    userList: UserListState[];
    setUserList: (newUser: UserListState[]) => void;
    selectedUsers: UserListState[];
    setSelectedUsers: (newSelectedUser: UserListState[]) => void;
    availableUsers: UserListState[];
    setAvailableUsers: (newAvailableUser: UserListState[]) => void;
}
