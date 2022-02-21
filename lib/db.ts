import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.aeoqh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );

  return client;
};
