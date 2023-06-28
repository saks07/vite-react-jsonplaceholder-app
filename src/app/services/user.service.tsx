import { Result } from "../../interfaces/httpClient.interface";
import { User } from "../../interfaces/user.interface";
import { UserApi } from "../api/user.api";

class UserService {
    private readonly userApi: UserApi;
    constructor(userApi: UserApi) {
        this.userApi = userApi;
    }

    async getUsers(): Promise<Result<User[]>> {
        const response = await this.userApi.getUsers();
        if (response) {
            return { data: response };
        }
        return { data: [] };
    }
}

export default UserService;