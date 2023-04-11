import api from "../backend";
import { CreateLoginInputDto, OutputLogintDto } from "../dto/login_dto";



const postLogin = async (input: CreateLoginInputDto): Promise<OutputLogintDto> => {
    const url = `/login`

    const res = await api.post(url, input);

    return res.data
}

export { postLogin }
