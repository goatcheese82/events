import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);



let conn;

try {
   conn = await client.connect();
   console.log(`Connected to MongoDB ${conn.s.url}`)
} catch(e) {
   console.error(e);
   process.exit(1);
}

let db = conn.db("events");

export default db;