import api from "../backend";
import { CreateListInputDto, DeleteListInputDto, OutputDeleteListDto, OutputListDto } from "../dto/list_dto";
import { getCookie } from 'cookies-next';




const getListAll = async () => {
    const token = getCookie('session_token');
    if (token == "") {
       console.log("not access")
       return 
    }
    
    const url =`/lists`

    const res = await api.get(url);

    const data = res.data;

    return data

}

const getListId = async (id:string) => {
    const token = getCookie('session_token');
    if (token == "") {
       console.log("not access")
       return
    }
    const url = `/list/id?id=${id}`

    const res = await api.get(url);

    const data = res.data;

    return data
    
};


const postList = async (input: CreateListInputDto) => {
    const token = getCookie('session_token');

    if (token == "") {
        console.log("not access")
        return
     }
    const url = `list/create`

    const res = await api.post(url, input);

    return res.data
}
// const deleteList = async (input: DeleteListInputDto): Promise<OutputDeleteListDto> => {
//     const url = `list/delete${input}`

//     const res = await api.delete(url, input);

//     return res.data
// }



export { postList, getListAll, getListId }
