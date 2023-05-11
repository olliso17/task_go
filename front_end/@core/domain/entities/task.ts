export type TaskProps ={
    _id:string;
    _title:string;
    _description?:string;
    _status?:boolean;
    _priority?:boolean;
    _listId?:string;
    _createdAt?:string;
    _updatedAt?:string;
    _deletedAt?:string;
    _isDeleted?:boolean;
    _timeSelect?:string;
}

export class Task {
    constructor(public props: TaskProps) {}

    get _id() {
        return this.props._id;
    }

    get _title() {
        return this.props._title;
    }

    get _description() {
        return this.props._description;
    }
    get _status(){
        return this.props._status;
    }
    get _priority(){
        return this.props._priority;
    }
    get _listId(){
        return this.props._listId;
    }
    get _createdAt(){
        return this.props._createdAt;
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
    get _timeSelect(){
        return this.props._timeSelect;
    }
    toJSON() {
        return {
            id: this._id,
            title: this._title,
            description: this._description,
            status: this._status,
            priority: this._priority,
            listId: this._listId,
            createdAt: this._createdAt,
            updatedAt: this._updatedAt,
            deletedAt: this._deletedAt,
            isDeleted: this._isDeleted,
            timeSelect: this._timeSelect,
        };
    }
}
