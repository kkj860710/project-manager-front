import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserType } from "@/types/user"; // UserType을 타입 정의 파일로 분리하는 것이 좋음.

export async function getSession() {
    return await getServerSession();
}

export default async function getCurrentUser(): Promise<UserType | null> {
    try {
        const session = await getSession();
        console.log("Session:", session);

        if (!session?.user?.email) {
            return null;
        }

        // ✅ session 정보를 UserType으로 변환
        const user: UserType = {
            id: session.user.id ?? undefined, // 존재하지 않으면 undefined로 처리
            userId: session.user.userId ?? undefined,
            username: session.user.username ?? undefined,
            email: session.user.email ?? undefined,
            password: session.user.password ?? undefined, // 보안상 password 반환을 피하는 것이 좋음
            passwordConfirm: session.user.passwordConfirm ?? undefined,
            role: session.user.role ?? undefined,
            iat: session.user.iat ?? undefined,
            exp: session.user.exp ?? undefined,
            jti: session.user.jti ?? undefined,
        };

        console.log("Mapped User:", user);
        return user;
    } catch (error) {
        console.error("Error fetching current user:", error);
        return null;
    }
}
