import { User } from "@/@core/domain/entities/user";
import { UserGateway } from "@/@core/domain/gateways/user.gateway";

export class PostUserUseCase {
    constructor(private userGateway: UserGateway) { }

    async execute(
        name: string,
        email: string,
        password: string,
    ): Promise<User> {
        return await this.userGateway.postUser(name, email, password)
    }
}