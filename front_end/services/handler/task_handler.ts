import api from "../backend";
import { InputCreateTaskDto, OutputTaskDto, TaskCompletedInputDto, TaskIdInputDto, TaskStatusInputDto, TaskTitleInputDto } from "../dto/task_dto";
import { getCookie } from 'cookies-next';


const postTask = async (
    input: InputCreateTaskDto
) => {
    const token = getCookie('session_token');
    if (token == "") {
        console.log("not access")
        return 
     }
     
    const url = `task/create`;

    const res = await api.post(url, input);

    return res.data;
};

const getTaskId = async (input: TaskIdInputDto)=> {
    const token = getCookie('session_token');
    if (token == "") {
        console.log("not access")
        return 
     }
    const url = `task/id/${input}`;

    const res = await api.get(url);

    return res.data;
};
const getTaskTitle = async (input: TaskTitleInputDto) =>{
    const token = getCookie('session_token');
    if (token == "") {
        console.log("not access")
        return 
     }
    const url = `task/title/${input}`;

    const res = await api.get(url);

    return res.data;
};

const patchTaskEdit = async (input: TaskStatusInputDto)  => {
    const token = getCookie('session_token');
    if (token == "") {
        console.log("not access")
        return 
     }
    const url = "list/edit";

    const res = await api.patch(url, input);

    const data = res.data;

    return data;
}

const getTasks = async () => {
    const token = getCookie('session_token');
    if (token == "") {
        console.log("not access")
        return 
     }
    const url = 'tasks';

    const res = await api.get(url);

    const data = res.data;

    return data;
};

export { postTask, getTaskId, getTaskTitle, getTasks, patchTaskEdit};