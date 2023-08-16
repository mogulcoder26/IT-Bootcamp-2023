import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const githubClientId : string = process.env.GITHUB_ID || '';
const githubClientSecret : string = process.env.GITHUB_SECRET || '';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: githubClientId,
      clientSecret: githubClientSecret,
    }),
  ],
  secret : process.env.NEXTAUTH_SECRET
})