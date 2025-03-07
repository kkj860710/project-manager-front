import NextAuth from "next-auth";
import { authOptions } from "../auth-options"; // ✅ authOptions를 별도 파일에서 가져오기

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
