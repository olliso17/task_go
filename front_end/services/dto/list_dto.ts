import { OutputTaskDto } from "./task_dto";

export interface ListIdInputDto{
    id:string;
}

export interface CreateListInputDto {
    name: string
}

export interface OutputListDto {
    id: string
    name: string
    tasks: OutputTaskDto[]
 
}