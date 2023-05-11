import { Task } from "@/@core/domain/entities/task";
import { TaskGateway } from "@/@core/domain/gateways/task.gateway";


export class PostTaskUseCase {
    constructor(private taskGateway: TaskGateway) { }

    async execute(
        title: string,
        listId: string,
        description?: string,
        time_select?: string,
    ): Promise<Task> {
        return await this.taskGateway.postTask(title, listId, description, time_select,)
    }
}