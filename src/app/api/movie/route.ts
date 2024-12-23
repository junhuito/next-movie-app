// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#caching
export const dynamic = "force-static";

import { connectDB, movieCollection } from "@/clients/mongodb";

export async function GET() {
  try {
    await connectDB();

    const result = await movieCollection.find().limit(10).toArray();
    
    return Response.json(result);
  } catch (error) {
    console.error(error);
    return Response.json([]);
  }
}
