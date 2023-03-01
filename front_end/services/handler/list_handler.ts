import api from "../backend";
import { CreateListInputDto, ListIdInputDto, OutputCreateListDto } from "../dto/list_dto";
import { IList } from "../model/list_type";



const getListAll = async () => {
    const url = `lists`

    const res = await api.get(url);

    const data = res.data;

    return data

}

const getListId = async (input: ListIdInputDto):Promise<IList> => {

    const url = `list/${input}`

    const res = await api.get(url);

    const data = res.data;

    return data
};


const postList = async (input: CreateListInputDto): Promise<OutputCreateListDto> => {
    const url = `list/create`

    const res = await api.post(url, input);

    return res.data
}

export {getListId, postList, getListAll};
