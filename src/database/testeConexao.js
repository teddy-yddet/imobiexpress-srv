// import mongodb from "mongodb"
import { MongoClient } from "mongodb";
// const { MongoClient } = require("mongodb");
import dotenv from "dotenv";
dotenv.config();

async function main() {
  //const uri = `mongodb+srv://${process.envMONGODB.USER}:${process.env.MONGODB_PASSWORD}@cluster0.qdif83e.mongodb.net/?retryWrites=true&w=majority`;
  const uri = process.env.MONGODBLOCAL;
  // const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.qdif83e.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);

  try {
    await client.connect();

    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}
