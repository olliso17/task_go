import BaseInterface from "../base/base.interface";
import { Task } from "../task/task.entity";

export default interface ListInterface extends BaseInterface {
  get name(): string;
  get typetask(): string;
  get userId(): string;
  get tasks(): Task[];
}
