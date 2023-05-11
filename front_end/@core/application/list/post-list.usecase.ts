import { List } from "@/@core/domain/entities/list";
import { ListGateway } from "@/@core/domain/gateways/list.gateway";

export class CreateListUseCase {
    constructor(private listGateway: ListGateway) { }

    async execute(
        name: string,
        userId: string,
        typeTask: string,
    ): Promise<List> {
        return await this.listGateway.postList(name, userId, typeTask)
    }
}