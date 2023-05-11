import { User } from "@/@core/domain/entities/user";
import { UserGateway } from "@/@core/domain/gateways/user.gateway";
import { AxiosInstance } from "axios";
import { getCookie } from "cookies-next";

export class UserHttpGateway implements UserGateway {
    constructor(private http: AxiosInstance) { }

    async postUser(
        name: string,
        email: string,
        password: string,
    ): Promise<User> {
        const input = {
            name: name,
            email: email,
            password: password,
        };
        const token = getCookie('session_token');
        if (token == "") {
            console.log("not access")
            throw new Error
        }

        const user= await this.http.post("/", input);

        const newUser= new User({
            _id: user.data.id,
            _email: user.data.email,
            _name: user.data.name,
            _password: user.data.password,
       
        });

        return newUser;
    }

}