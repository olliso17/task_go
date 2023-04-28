import { OutputTaskDto } from "./task_dto";
export interface CreateListInputDto {
    name: string
    user_id:string|undefined;
    type_task:string
}

export interface OutputListDto {
    id: string
    name: string
    user_id:string
    type_task:string
    tasks: OutputTaskDto[]
 
}
export interface DeleteListInputDto {
    id: string
}
export interface OutputDeleteListDto {
    mensage: string
 
}