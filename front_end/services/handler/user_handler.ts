import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import api from "../backend";
import { CreateUserInputDto, OutputUsertDto } from "../dto/user_dto";



// const getListAll = async () => {
//     const url = "lists"

//     const res = await api.get(url);

//     const data = res.data;

//     return data

// }

// const getListId = async (input: ListIdInputDto):Promise<OutputListDto> => {

//     const url = `list/${input}`

//     const res = await api.get(url);

//     const data = res.data;

//     return data
// };


const postUser = async (input: CreateUserInputDto): Promise<OutputUsertDto> => {
    const url = `/`

    const res = await api.post(url, input);
   
    return res.data
}
// const deleteList = async (input: DeleteListInputDto): Promise<OutputDeleteListDto> => {
//     const url = `list/delete`

//     const res = await api.delete(url, input);

//     return res.data
// }


// const useMutationPostUser = ()=> useMutation({
//     mutationFn: postUser
    
// })


// // const useQueryListAll = ()=> useQuery("lists", getListAll)

// const useHandlerList=()=>{
//     const postUser = useMutationPostUser()
//     // const getListAll = useQueryListAll()
//     const handler_user = {
//         postUser, //getuserAll
//     }

//     return handler_user
// }
export {postUser}
