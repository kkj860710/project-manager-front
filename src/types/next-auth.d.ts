import {DefaultSession} from "next-auth";

declare module "next-auth"{
    interface Session {
        user?: {
            userId?: string;
            email?: string;
            password?: string;
            role?: string;
        } & DefaultSession['user']
    }
}