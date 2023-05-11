import { Task } from "../entities/task";


export interface TaskGateway {
    postTask(
        title: string,
        listId: string,
        description?: string,
        time_select?: string,
    ): Promise<Task>;
    findAll():Promise<Task[]>;
    getTaskId(id: string): Promise<Task>;
    getTaskTitle(title: string): Promise<Task>;
    patchTaskCompleted(id: string, status:boolean): Promise<Task>;
    // editTask(task: Task): Promise<Task>;
    // softDelete(task: Task): Promise<void>;
}
	



