import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Input Email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log("credentials : ", credentials);
        if (!credentials?.email || !credentials?.password) {
          throw new Error("email or password is required");
        }

        const response = await axios.post(
            process.env.NEXT_PUBLIC_API + "/api/user/sign-in",
            {
              email: credentials?.email,
              password: credentials?.password,
            }
        );

        let user = null;
        if (response.status === 200 || response.status === 201) {
          user = response.data;
        } else {
          throw new Error("유효한 사용자가 없습니다.");
        }
        console.log("nextAuth : ", user);
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
    maxAge: 30 * 24 * 60 * 60, // 30일 (초 단위)
  },
  pages: {
    signIn: "app/auth/sign-in",
  },
  callbacks: {
    async signIn() {
      return true;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async session({ session }) {
      // session.user = token;
      return session;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
  },
});

// Next.js API Route 핸들러로 등록
export { handler as GET, handler as POST };
