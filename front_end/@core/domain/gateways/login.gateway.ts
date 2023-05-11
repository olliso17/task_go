import { Login } from "../entities/login";

export interface LoginGateway {
    postLogin(
        email: string,
        password: string,
    ): Promise<Login>;
    getLogin():Promise<Login>;
    postLogout(): Promise<Login>;
    
}

