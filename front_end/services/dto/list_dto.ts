import { OutputTaskDto } from "./task_dto";

export interface ListIdInputDto{
    id:string;
}

export interface CreateListInputDto {
    name: string
    user_id:string
}

export interface OutputListDto {
    id: string
    name: string
    tasks: OutputTaskDto[]
 
}
export interface DeleteListInputDto {
    id: string
}
export interface OutputDeleteListDto {
    mensage: string
 
}