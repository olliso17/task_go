export type LoginProps ={
    _id:string,
    _userId:string
    _sessionToken?:string,
    _hostName?:string,
    _ipAddress?:number,
    _createdAt?:Date,
    _expiredAt?:Date,
    _isLogout?:boolean,
}

export class Login{
    constructor(public props:LoginProps){}

    get _id() {
        return this.props._id;
    }
    get _userId() {
        return this.props._userId;
    }
    get _sessionToken() {
        return this.props._sessionToken;
    }
    get _hostName(){
        return this.props._hostName;
    }
    get _ipAddress(){
        return this.props._ipAddress;
    }
    get _createdAt(){
        return this.props._createdAt;
    }
    get _expiredAt(){
        return this.props._expiredAt;
    }
    
    get _isLogout(){
        return this.props._isLogout;
    }
    toJSON() {
        return {
            id: this._id,
            userId: this._userId,
            sessionToken: this._sessionToken,
            hostName: this._hostName,
            ipAddress: this._ipAddress,
            createdAt: this._createdAt,
            expiredAt: this._expiredAt,
            isLogout: this._isLogout,
           
        };
    }
}