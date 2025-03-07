import {DefaultSession} from "next-auth";

declare module "next-auth"{
    interface Session {
        user: {
            id?: number,
            userId?: number,
            username? : string,
            name?: string,
            image?: string,
            email: string,
            password : string,
            passwordConfirm? : string,
            role : string,
            iat? : number,
            exp? : number,
            jwt : string,
            jti? : string,
        } & DefaultSession['JWT']
    }
}