import { User } from "../entities/user";

export interface UserGateway {
    postList(
        name: string,
        email: string,
        password: string
    ): Promise<User>;

}
