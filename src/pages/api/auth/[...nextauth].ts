import NextAuth from "next-auth"
import GitlabProvider from "next-auth/providers/gitlab";

export default NextAuth({
  providers: [
    GitlabProvider({
      clientId: process.env.GITLAB_CLIENT_ID,
      clientSecret: process.env.GITLAB_CLIENT_SECRET,
      scope: 'read:user'
    }),
  ],
})