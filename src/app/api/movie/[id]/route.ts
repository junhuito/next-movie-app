// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#caching
export const dynamic = 'force-static';

import { connectDB, movieCollection } from '@/clients/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    
    try {
        await connectDB();

        // https://nextjs.org/docs/messages/sync-dynamic-apis
        const { id } = await params;

        const result = await movieCollection.findOne({ _id: new ObjectId(id) });

        return Response.json(result);
    } catch (error) {
        console.error(error);
        return Response.json(null);
    }
}