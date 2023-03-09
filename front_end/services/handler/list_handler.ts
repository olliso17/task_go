import api from "../backend";
import { CreateListInputDto, DeleteListInputDto, ListIdInputDto, OutputDeleteListDto, OutputListDto } from "../dto/list_dto";


const getListAll = async () => {
    const url = "lists"

    const res = await api.get(url);

    const data = res.data;

    return data

}

const getListId = async (input: ListIdInputDto):Promise<OutputListDto> => {

    const url = `list/${input}`

    const res = await api.get(url);

    const data = res.data;

    return data
};


const postList = async (input: CreateListInputDto): Promise<OutputListDto> => {
    const url = `list/create`

    const res = await api.post(url, input);

    return res.data
}
// const deleteList = async (input: DeleteListInputDto): Promise<OutputDeleteListDto> => {
//     const url = `list/delete`

//     const res = await api.delete(url, input);

//     return res.data
// }
export {getListId, postList, getListAll};
