import api from "../backend";
import { CreateListInputDto, DeleteListInputDto, OutputDeleteListDto, OutputListDto } from "../dto/list_dto";
import { getCookie } from 'cookies-next';
import { AxiosResponse } from "axios";




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
const deleteList = async (input: DeleteListInputDto)=>{
    const token = getCookie('session_token');

    if (token == "") {
        console.log("not access")
        
    }
    const params = {id: input.id};
    const url = `list/delete`

    const res = await api.delete(url, {data: params});
    return res.data
}



export { postList, getListAll, getListId, deleteList }
