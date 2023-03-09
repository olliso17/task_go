import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import api from "../backend";
import { CreateListInputDto, ListIdInputDto, OutputListDto } from "../dto/list_dto";


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


const useMutationPostList = ()=> useMutation({
    mutationFn: postList
    
})


const useQueryListAll = ()=> useQuery("lists", getListAll)

const useHandlerList=()=>{
    const postList = useMutationPostList()
    const getListAll = useQueryListAll()
    const handler_list = {
        postList, getListAll
    }

    return handler_list
}
export {useHandlerList}
