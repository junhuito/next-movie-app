import { MongoClient, ServerApiVersion } from "mongodb";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(process.env.MONGODB_URI!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const movieCollection = client.db("sample_mflix").collection("movies");

let ins: MongoClient | null = null;

export async function connectDB() {
  if (!ins) {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      ins = await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });

      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );

      return ins;
    } catch(e) {
        console.log('e...', e);
      // Ensures that the client will close when you finish/error
      await client.close();

      throw new Error("Failed to connect to MongoDB");
    }
  } else {
    console.log('connected...')
    return ins;
  }
}
