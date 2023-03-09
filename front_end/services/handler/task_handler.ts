import api from "../backend";
import { InputCreateTaskDto, OutputTaskDto, TaskCompletedInputDto, TaskIdInputDto, TaskStatusInputDto, TaskTitleInputDto } from "../dto/task_dto";

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

const patchTaskEdit = async (input: TaskStatusInputDto):Promise<OutputTaskDto>  => {
    const url = "list/edit";

    const res = await api.patch(url, input);

    const data = res.data;

    return data;
}

const getTasks = async () => {
    const url = 'tasks';

    const res = await api.get(url);

    const data = res.data;

    return data;
};

export { postTask, getTaskId, getTaskTitle, getTasks, patchTaskEdit};