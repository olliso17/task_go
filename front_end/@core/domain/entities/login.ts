export type LoginProps ={
    _email:string
    _password:string
}

export class Login{
    constructor(public props:LoginProps){}

    get _email() {
        return this.props._email;
    }
    get _password() {
        return this.props._password;
    }
   
    toJSON() {
        return {
            _email: this._email,
        _password: this._password
           
        };
    }
}