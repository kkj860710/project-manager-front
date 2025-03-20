import {NextResponse} from "next/server";

export { default } from "next-auth/middleware"

// export async function middleware (req: NextRequest) {
export async function middleware () {

    // const session = await getToken({req, secret: process.env.NEXTAUTH_JWT_SECRET});
    //
    // console.log("session", session);
    //
    // if(!session) {
    //     return NextResponse.redirect(new URL('/auth/sign-in', req.url))
    // }


    // const pathname = req.nextUrl.pathname;
    //
    // // user만 접근 가능한 페이지
    // if(pathname.startsWith('/user') && !session) {
    //     return NextResponse.redirect(new URL('/user', req.url))
    // }
    // // admin만 접근 가능한 페이지
    // if(pathname.startsWith('/admin') && (session?.role !== "ADMIN")) {
    //     return NextResponse.redirect(new URL('/', req.url))
    // }
    //
    // // 로그인 한 경우 회원관련 페이지 접근 제한
    // if(pathname.startsWith('/auth') && session) {
    //     return NextResponse.redirect(new URL('/', req.url))
    // }

    return NextResponse.next();
}