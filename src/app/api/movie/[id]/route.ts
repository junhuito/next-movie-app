// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#caching
export const dynamic = "force-static";

import { connectDB, movieCollection } from "@/clients/mongodb";
import { Movie } from "@/types/movie";
import { ObjectId } from "mongodb";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    // https://nextjs.org/docs/messages/sync-dynamic-apis
    const { id } = await params;

    const result = await movieCollection.findOne<Movie>({
      _id: new ObjectId(id),
    });

    if (result?.genres.length) {
        // result.poster
      const similarMovies = await movieCollection
        .find<Movie>({
          genres: { $in: result.genres },
          _id: { $not: { $eq: new ObjectId(id) } },
          poster: { $exists: true },
        })
        .limit(10)
        .toArray();

      return Response.json({
        ...result,
        similarMovies,
      });
    }

    if (result) {
      return Response.json({
        ...result,
        similarMovies: [],
      });
    }

    return Response.json(null);
  } catch (error) {
    console.error(error);
    return Response.json(null);
  }
}
