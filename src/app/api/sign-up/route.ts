import {UserType} from "@/types/common";
import {NextResponse} from "next/server";
import axios from "axios";

export async function POST(request:Request) {
    const data: UserType = await request.json();

    const  {
        userLoginId,
        userPassword,
        userName,
        userEmail,
        userPhoneNo,
        role
    } = data;

    const res = await axios.post(process.env.NEXT_PUBLIC_API + "user/sign-up", {
            userLoginId
            , userPassword
            , userName
            , userEmail
            , userPhoneNo
            , role
        })

    return NextResponse.json(res.data)
}