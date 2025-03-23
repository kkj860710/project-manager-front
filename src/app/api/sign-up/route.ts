import {UserState} from "@/types/user";
import {NextResponse} from "next/server";
import axios from "axios";

export async function POST(request:Request) {
    const data: UserState = await request.json();

    const  {
        username ,
        email ,
        password ,
        role
    } = data;
    const res = await axios.post( process.env.NEXT_PUBLIC_API + "/api/user/sign-up", {
            username ,
            email ,
            password ,
            role
        })
    console.log(res);
    return NextResponse.json(res.data)
}