import api from "./backend";



export type ITask = {
    id: string;
    title: string;
    description: string;
    list_id: string;
};

export interface InputCreateTaskDto {
    title: string;
    description: string;
    status:boolean;
    priority:boolean;
    list_id:string;
    time_select: string;
}

export interface OutputCreateTaskDto {
    id: string;
    title: string;
    description: string;
    status:boolean;
    priority:boolean;
    list_id:string;
    time_select: string;
}

const postTask = async (
    input: InputCreateTaskDto
): Promise<OutputCreateTaskDto> => {
    const url = `task/create`;

    const res = await api.post(url, input);

    return res.data;
};

const getTask = async (input: string): Promise<ITask> => {
    const url = `/task/id/${input}`;

    const res = await api.get(url);

    return res.data;
};

const getTasks = async () => {
    const url = `tasks`;

    const res = await api.get(url);

    const data = res.data;

    return data;
};