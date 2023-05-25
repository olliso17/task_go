export interface InputCreateTaskDto {
    title: string;
    description?: string;
    priority?: boolean;
    list_id: string;
    time_select?: string;
}
export interface TaskIdInputDto {
    id: string;
}
export interface TaskTitleInputDto {
    title: string;
}
export interface TaskStatusInputDto {
    id: string;
    status: boolean;
}
export interface TaskCompletedInputDto {
    id: string;
    status: boolean;
}

export interface OutputTaskDto {
    id: string;
    title: string;
    description: string;
    status: boolean;
    priority: boolean;
    list_id: string;
    time_select:string;
    is_deleted: boolean;
}

