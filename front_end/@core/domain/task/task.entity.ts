import BaseEntity, { BaseEntityProps } from "../base/base.entity";
import { TaskInterface } from "./task.interface";

export type TaskProps = BaseEntityProps & {
  title: string;
  description?: string;
  status: boolean;
  listId: string;
  timeSelect?: string;
};

export class Task extends BaseEntity implements TaskInterface {
  private _title: string;
  private _description: string;
  private _status: boolean;
  private _listId: string;
  private _timeSelect: string;

  constructor(props: TaskProps) {
    super(props);
    this._title = props.title;
    this._description = props.description || "";
    this._status = props.status;
    this._listId = props.listId;
    this._timeSelect = props.timeSelect || "";
  }
  get title(): string {
    return this._title;
  }
  get description(): string {
    return this._description;
  }
  get status(): boolean {
    return this._status;
  }
  get listId(): string {
    return this._listId;
  }
  get timeSelect(): string {
    return this._timeSelect;
  }
}
