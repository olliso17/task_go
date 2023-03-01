import api from "./backend";



export interface CreateListInputDto {
    name: string
}

export interface OutputCreateListDto {
    id: string
    name: string
 
}

const getListAll = async () => {
    const url = `lists`

    const res = await api.get(url);

    const data = res.data;

    return data

}

const getListId = async (listId: string) => {

    const url = `list/${listId}`

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
