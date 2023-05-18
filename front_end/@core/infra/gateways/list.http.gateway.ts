import { List } from "@/@core/domain/entities/list";
import { ListGateway } from "@/@core/domain/gateways/list.gateway";
import api from "@/services/backend";
import { OutputListDto } from "@/services/dto/list_dto";
import { AxiosInstance } from "axios";
import { getCookie } from "cookies-next";

export class ListHttpGateway implements ListGateway {
    constructor(private http: AxiosInstance) { }

    async postList(
        name: string,
        userId: string,
        typeTask: string,
    ): Promise<List> {
        const input = {
            name: name,
            userId: userId,
            typeTask: typeTask,
        };
        const token = getCookie('session_token');
        if (token == "") {
            console.log("not access")
            throw new Error
        }

        const list= await this.http.post("/list/create", input);

        const newList= new List({
            _id: list.data.id,
            _name: list.data.name,
            _userId: list.data.userId,
            _typeTask: list.data.typeTask,
        });

        return newList;
    }


    async getListId(id: string): Promise<List> {
        const token = getCookie('session_token');
        if (token == "") {
            console.log("not access")
            throw new Error
        }
        const list = await this.http.get(`/list/id?id=${id}`);

        const findedList = new List({
            _id: list.data.id,
            _name: list.data.name,
            _userId: list.data.user_userId,
            _typeTask: list.data.typeTask,
            _tasks: list.data.tasks
        });

        return findedList;

    };
    async deleteList(id: string): Promise<List> {
        const token = getCookie('session_token');
        if (token == "") {
            console.log("not access")
            throw new Error
        }
        const list = await this.http.delete(`list/delete`,{data: id});

        const findedList = new List({
            _id: list.data.id,
            _name: list.data.name,
            _userId: list.data.user_userId,
            _typeTask: list.data.typeTask,
            _tasks: list.data.tasks
        });

        return findedList;

    };
    
    async getListAll(): Promise<OutputListDto[]>  {
        const token = getCookie('session_token');
        if (token == "") {
            console.log("not access")
            throw new Error
        }
        const url = 'lists';

        const lists = await api.get(url);

        return lists.data;
    };
}