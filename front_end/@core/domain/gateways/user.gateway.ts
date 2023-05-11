import { User } from "../entities/user";

export interface UserGateway {
    postUser(
        name: string,
        email: string,
        password: string
    ): Promise<User>;

}
