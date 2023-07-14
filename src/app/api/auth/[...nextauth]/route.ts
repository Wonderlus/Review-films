import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import connect from "@/utils/db";
import User from "@/models/User";
const handler = NextAuth({
  providers: [

    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials?) {
        await connect();

        if (!credentials) {
          throw new Error("Credentials not found");
        }

        try {
          const user = await User.findOne({ username: credentials.username });

          if (user) {
            if (credentials.password == user.password) {
              return user;
            } else {
              throw new Error("Password is incorrect");
            }
          }
        } catch (error) {
          if (error instanceof Error) {
            throw new Error(error.message);
          }
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
