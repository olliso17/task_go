
import { useToast } from "@chakra-ui/react"
import { useMutation, useQuery } from "react-query";
import api from "../backend";
import { CreateListInputDto, ListIdInputDto, OutputListDto } from "../dto/list_dto";




const getListAll = async () => {
    const url = "lists"

    const res = await api.get(url);

    const data = res.data;

    return data

}

const getListId = async (input: ListIdInputDto): Promise<OutputListDto> => {

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

const useMutationPostList= () => {
    const toast = useToast()
    const mutation = useMutation({
        mutationFn: postList, onSuccess: ((data) => {
            toast({
                title: 'Liste create.',
                description: `"List successfully created."`,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })

        }), onError(error) {
            toast({
                title: `${error} `,
                status: 'error',
                duration: 9000,
                isClosable: true,

            })

        },
    })
    return mutation
}

export { postList, getListAll, getListId, useMutationPostList }
