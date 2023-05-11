import { List } from "../entities/list";


export interface ListGateway {
    postList(
        name: string,
        userId: string,
        typeTask: string,
    ): Promise<List>;
    getListAll():Promise<List[]>;
    getListId(id: string): Promise<List>;
    deleteList(id: string): Promise<List>;

}
