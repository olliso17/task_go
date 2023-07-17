import BaseInterface from "../base/base.interface";

export interface TaskInterface extends BaseInterface {
  get title(): string;
  get description(): string;
  get status(): boolean;
  get listId(): string;
  get timeSelect(): string;
}
