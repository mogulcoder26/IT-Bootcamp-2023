import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:"1064497334688-498s6bb8tll0qvumrebecrlsscv4flma.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});

export { handler as GET, handler as POST };
