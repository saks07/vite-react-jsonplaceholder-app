import { User } from "../../interfaces/user.interface";
import { HttpClient } from "./httpClient"

export class UserApi {
    private readonly httpClient: HttpClient;
    private usersUrl: string = 'https://jsonplaceholder.typicode.com/users';

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async getUsers(): Promise<User[]> {
        try {
            const response = await this.httpClient.get<User[]>(this.usersUrl);
            return response;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}