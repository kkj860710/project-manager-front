import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {UserType} from "@/types/common";


export async function getSession() {
    return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
    try {
        const session = await getSession();
        console.log(session);

        if (!session?.user?.email) {
            return null;
        }

        // const returnSession : UserType = session?.user;
        // console.log("returnSession : " + returnSession);
        // const currentUser = await signIn("credentials", {
        //     email: session.user.email,
        //     password: session.user.password,
        //     redirect: false, // 리다이렉트를 방지
        // });
        // console.log("Current user session:", currentUser);



        return session;
    } catch (error) {
        console.error("Error fetching current user:", error);
        return null;
    }
}