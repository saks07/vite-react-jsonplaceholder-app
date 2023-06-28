import { HttpClient } from "./api/httpClient";
import { UserApi } from "./api/user.api";
import UserService from "./services/user.service";

class MainApp {
    private httpClient: HttpClient;
    private userApi: UserApi;
    public userService: UserService;

    constructor() {
        this.httpClient = new HttpClient();
        this.userApi = new UserApi(this.httpClient);
        this.userService = new UserService(this.userApi);
        console.log('constructor');
    }
}

const mainApp = new MainApp();

export default mainApp;