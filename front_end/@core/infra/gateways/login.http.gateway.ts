import { List } from "@/@core/domain/entities/list";
import { Login } from "@/@core/domain/entities/login";
import { LoginGateway } from "@/@core/domain/gateways/login.gateway";
import api from "@/services/backend";
import { AxiosInstance } from "axios";
import { getCookie } from "cookies-next";

export class LoginHttpGateway implements LoginGateway {
    constructor(private http: AxiosInstance) { }

    async postLogin(
        email: string,
        password: string,
    ): Promise<Login> {
        const input = {
            email: email,
            password: password
        };
        const token = getCookie('session_token');
        if (token == "") {
            console.log("not access")
            throw new Error
        }

        const login= await this.http.post("/login", input);

        const newLogin= new Login({
            _email: login.data.email,
            _password: login.data.password
        });

        return newLogin;
    }
    async postLogout(): Promise<Login> {

        const token = getCookie('session_token');
        if (token == "") {
            console.log("not access")
            throw new Error
        }

        const login= await this.http.post("/logout");

        const newLogin= new Login({
            _email: login.data.email,
            _password: login.data.password
        });

        return newLogin;
    }

 
}