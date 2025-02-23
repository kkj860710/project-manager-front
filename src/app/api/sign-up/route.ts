import {UserType} from "@/types/common";
import {NextResponse} from "next/server";
import axios from "axios";

export async function POST(request:Request) {
    const data: UserType = await request.json();

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

    return NextResponse.json(res.data)
}