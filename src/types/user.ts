export interface UserType {
    id?: number,
    userId?: number,
    username? : string,
    email? : string,
    password? : string,
    passwordConfirm? : string,
    role? : string,
    iat? : number,
    exp? : number,
    jti? : string,
}