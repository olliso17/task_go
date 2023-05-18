import { GetListAlltUseCase } from "@/@core/application/list/get-list-all.usecase";
import { ListHttpGateway } from "@/@core/infra/gateways/list.http.gateway";
import api from "../backend";

const useGetListAll = async() => {
    
        const gatewayList = new ListHttpGateway(api);
        const useCaseListAll = new GetListAlltUseCase(gatewayList);
        const getListAll = await useCaseListAll.execute();

        return getListAll
}
 export {useGetListAll}