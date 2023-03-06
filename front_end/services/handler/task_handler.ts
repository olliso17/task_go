import api from "../backend";
import { InputCreateTaskDto, OutputTaskDto, TaskCompletedInputDto, TaskIdInputDto, TaskTitleInputDto } from "../dto/task_dto";

const postTask = async (
    input: InputCreateTaskDto
): Promise<OutputTaskDto> => {
    const url = 'task/create';

    const res = await api.post(url, input);

    return res.data;
};

const getTaskId = async (input: TaskIdInputDto): Promise<OutputTaskDto> => {
    const url = `task/id/${input}`;

    const res = await api.get(url);

    return res.data;
};
const getTaskTitle = async (input: TaskTitleInputDto): Promise<OutputTaskDto> => {
    const url = `task/title/${input}`;

    const res = await api.get(url);

    return res.data;
};

//criar um update finalizando a task
// const getTaskCompleted = async (input: TaskCompletedInputDto): Promise<OutputTaskDto> => {
//     const url = `/task/completed/${input}`;

//     const res = await api.get(url);

//     return res.data;
// }

const getTasks = async () => {
    const url = 'tasks';

    const res = await api.get(url);

    const data = res.data;

    return data;
};

export { postTask, getTaskId, getTaskTitle, getTasks};