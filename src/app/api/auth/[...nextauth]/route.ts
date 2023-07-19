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
        name: { label: "Name", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials?) {
        await connect();
        if (!credentials) {
          throw new Error("Credentials not found");
        }

        try {
          const user = await User.findOne({ name: credentials.name });

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
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user}) {
      
      return token
    },

    async session({ session, token, user }) {
      await connect();

      const userDB = await User.findOne({_id: token.sub});
      session.user = userDB;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
