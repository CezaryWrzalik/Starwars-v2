import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      
      authorize: async (credentials , req) => {
          const client = await connectToDatabase();

          const usersCollection = client.db().collection("users");

          if(!credentials){
            throw new Error("Some thing went wrong");
          }

          const user = await usersCollection.findOne({
            email: credentials.email,
          });

          if (!user) {
            throw new Error("No user found!");
          }

          const isValid = await verifyPassword(
            credentials.password,
            user.password
          );

          if (!isValid) {
            throw new Error("Could not log you in!");
          }

          client.close();
          
          if(user) {
            return user
          }
          else {
            return null
          }
      },
    }),
  ],
  session: {
    strategy: 'jwt'
  },

});