import { randomUUID } from "crypto";
import BaseInterface from "./base.interface";

export type BaseEntityProps = {
  id?: string;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deactivatedAt?: Date;
};

export default class BaseEntity implements BaseInterface {
  private _id: string;
  private _isDeleted: boolean;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _deactivatedAt: Date;

  constructor(props: BaseEntityProps) {
    this._id = props.id || randomUUID();
    this._isDeleted = props.isDeleted || true;
    this._createdAt = props.createdAt || new Date();
    this._updatedAt = props.updatedAt || new Date();
    this._deactivatedAt = props.deactivatedAt || new Date();
  }

  get id(): string {
    return this._id;
  }
  get isDeleted(): boolean {
    return this._isDeleted;
  }
  get createdAt(): Date {
    return this._createdAt;
  }
  get updatedAt(): Date {
    return this._updatedAt;
  }
  get deactivatedAt(): Date {
    return this._deactivatedAt;
  }
}
