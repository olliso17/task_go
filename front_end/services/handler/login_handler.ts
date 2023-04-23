import api from "../backend";
import { CreateLoginInputDto, OutputLogintDto } from "../dto/login_dto";



const postLogin = async (input: CreateLoginInputDto): Promise<OutputLogintDto> => {
    const url = "/login"

    const res = await api.post(url, input);

    return res.data

}

const getLogin = async () => {

    const url = `login/token`

    const res = await api.get(url);

    const data = res.data;

    return data
};
const postLogout = async () => {

    const url = `logout`

    const res = await api.post(url);

    const data = res.data;

    return data
};
export { postLogin, getLogin, postLogout }
