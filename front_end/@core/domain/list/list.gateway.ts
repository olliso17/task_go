import { List } from "./list.entity";

export interface ListGateway {
  create(list: List): Promise<List>;
  findAll(): Promise<List[]>;
  findById(id: string): Promise<List>;
  update(list: List): Promise<List>;
  softDelete(list: List): Promise<string>;
}
