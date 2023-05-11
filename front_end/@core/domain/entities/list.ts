import { Task} from "./task";

export type ListProps ={
    _id:string,
    _name:string,
    _typeTask:string,
    _createdAt?:string;
    _userId:string
    _tasks?:Task[];
    _updatedAt?:string;
    _deletedAt?:string;
    _isDeleted?:boolean;
}

export class List{
    constructor(public props:ListProps){}

    get _id() {
        return this.props._id;
    }
    get _name() {
        return this.props._name;
    }
    get _typeTask() {
        return this.props._typeTask;
    }
    get _createdAt(){
        return this.props._createdAt;
    }
    get _userId() {
        return this.props._userId;
    }
    get _tasks() {
        return this.props._tasks;
    }
    get _updatedAt(){
        return this.props._updatedAt;
    }
    get _deletedAt(){
        return this.props._deletedAt;
    }
    get _isDeleted(){
        return this.props._isDeleted;
    }
    toJSON() {
        return {
            id: this._id,
            name: this._name,
            typeTask: this._typeTask,
            createdAt: this._createdAt,
            userId: this._userId,
            tasks:this._tasks,
            updatedAt: this._updatedAt,
            deletedAt: this._deletedAt,
            isDeleted: this._isDeleted,
           
        };
    }
}