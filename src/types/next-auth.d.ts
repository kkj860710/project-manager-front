import {DefaultSession} from "next-auth";

declare module "next-auth"{
    interface Session {
        user?: {
            userId?: string | null;
            email?: string | null;
            password?: string | null;
            role?: string | null;
        } & DefaultSession['user']
    }
}