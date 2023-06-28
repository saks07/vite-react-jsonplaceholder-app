export interface UsersState {
    usersData: User[];
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}