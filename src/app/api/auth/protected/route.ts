// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '../[...nextauth]/route';
import getCurrentUser from "@/actions/getCurrentUser";

export async function GET() {
  const session = await getCurrentUser();

  if (!session) {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), {
      status: 401,
    });
  }

  return new Response(JSON.stringify({ message: 'Success', session }), {
    status: 200,
  });
}
