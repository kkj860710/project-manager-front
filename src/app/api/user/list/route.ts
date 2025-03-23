import {NextResponse} from "next/server";
import axios from "axios";

export async function GET() {
    const res = await axios.get( process.env.NEXT_PUBLIC_API + "/api/user")
    console.log(res);
    return NextResponse.json(res.data)
}