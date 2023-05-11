import { List } from "./list"

export type UserProps ={
    _id:string,
    _email:string,
    _name:string,
    _password:string,
    _isAdmin?:boolean,
    _lists?:List[],
    _createdAt?:string,
    _updatedAt?:string,
    _deletedAt?:string,
    _isDeleted?:boolean,

}

export class User{
    constructor(public props:UserProps){}

    get _id() {
        return this.props._id;
    }
    get _email() {
        return this.props._email;
    }
    get _name() {
        return this.props._name;
    }
    get _password() {
        return this.props._password;
    }
    get _isAdmin(){
        return this.props._isAdmin;
    }
    get _lists() {
        return this.props._lists;
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
    toJSON() {
        return {
            id: this._id,
            email: this._email,
            name: this._name,
            password:this._password,
            isAdmin: this._isAdmin,
            lists: this._lists,
            createdAt: this._createdAt,
            updatedAt: this._updatedAt,
            deletedAt: this._deletedAt,
            isDeleted: this._isDeleted,
           
        };
    }
}