export interface CreateLoginInputDto {
    email: string
    password: string
}

export interface OutputLogintDto {
   mensage:string
   user_id:string
 
}
export interface DeleteLogintInputDto {
    id: string
}
export interface OutputDeleteLogintDto {
    mensage: string
 
}