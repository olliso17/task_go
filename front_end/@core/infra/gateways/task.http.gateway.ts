import { Task } from "@/@core/domain/entities/task";
import { TaskGateway } from "@/@core/domain/gateways/task.gateway";
import { AxiosInstance } from "axios";
import { getCookie } from "cookies-next";

export class TaskHttpGateway implements TaskGateway {
    constructor(private http: AxiosInstance) { }

    async postTask(
        title: string,
        listId: string,
        description?: string,
        time_select?: string,
    ): Promise<Task> {
        const input = {
            title: title,
            listId: listId,
            description: description,
            time_select: description,
        };
        const token = getCookie('session_token');
        if (token == "") {
            console.log("not access")
            throw new Error
        }

        const task = await this.http.post("/task/create", input);

        const newTask = new Task({
            _id: task.data.id,
            _title: task.data.title,
            _listId: task.data.listId,
            _description: task.data.description,
            _timeSelect: task.data.timeSelect,
        });

        return newTask;
    }


    async getTaskId(id: string): Promise<Task> {
        const token = getCookie('session_token');
        if (token == "") {
            console.log("not access")
            throw new Error
        }
        const task = await this.http.get(`task/id/${id}`);

        const findedTask = new Task({
            _id: task.data.id,
            _title: task.data.title,
            _listId: task.data.listId,
            _description: task.data.description,
            _timeSelect: task.data.timeSelect,
        });

        return findedTask;

    };

    async getTaskTitle(title: string): Promise<Task> {
        const token = getCookie('session_token');
        if (token == "") {
            console.log("not access")
            throw new Error
        }
        const task = await this.http.get(`task/title/${title}`);

        const findedTask = new Task({
            _id: task.data.id,
            _title: task.data.title,
            _listId: task.data.listId,
            _description: task.data.description,
            _timeSelect: task.data.timeSelect,
        });

        return findedTask;
    }

    async patchTaskCompleted(id: string, status: boolean): Promise<Task> {
        const input = {
            id: id,
            status: status
        };
        const token = getCookie('session_token');
        if (token == "") {
            console.log("not access")
            throw new Error
        }
        const url = "task/completed";

        const task = await this.http.patch(url, input);
        const findedTask = new Task({
            _id: task.data.id,
            _title: task.data.title,
            _listId: task.data.listId,
            _description: task.data.description,
            _timeSelect: task.data.timeSelect,
            _status: task.data.status
        });

        return findedTask;
    }

    async findAll(): Promise<Task[]>  {
        const token = getCookie('session_token');
        if (token == "") {
            console.log("not access")
            throw new Error
        }
        const url = 'tasks';

        const tasks = await this.http.get(url);
        const alltasks: Task[] = [];
        tasks.data.map((task: any) => {
            alltasks.push(task);
        });

        return alltasks;
    };
}