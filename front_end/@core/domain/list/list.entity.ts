import BaseEntity, { BaseEntityProps } from "../base/base.entity";
import { Task } from "../task/task.entity";
import ListInterface from "./list.interfaces";

export type ListProps = BaseEntityProps & {
  name: string;
  typetask: string;
  userId: string;
  tasks?: Task[];
};

export class List extends BaseEntity implements ListInterface {
  private _name: string;
  private _typetask: string;
  private _userId: string;
  private _tasks: Task[];

  constructor(props: ListProps) {
    super(props);
    this._name = props.name;
    this._typetask = props.typetask;
    this._userId = props.userId;
    this._tasks = props.tasks || [];
  }

  get name(): string {
    return this._name;
  }
  get typetask(): string {
    return this._typetask;
  }
  get userId(): string {
    return this._userId;
  }
  get tasks(): Task[] {
    return this._tasks;
  }
}
