import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/auth-options";


export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), {
      status: 401,
    });
  }

  return new Response(JSON.stringify({ message: 'Success', session }), {
    status: 200,
  });
}
