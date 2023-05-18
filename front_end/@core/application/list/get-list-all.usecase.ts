import { List } from "@/@core/domain/entities/list";
import { ListGateway } from "@/@core/domain/gateways/list.gateway";
import { OutputListDto } from "@/services/dto/list_dto";

export class GetListAlltUseCase {
    constructor(private listGateway: ListGateway) { }

    async execute(): Promise<OutputListDto[]> {
        return await this.listGateway.getListAll()
    }
}