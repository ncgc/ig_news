import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import GitlabProvider from "next-auth/providers/gitlab";
import { query as q } from 'faunadb'

import { fauna } from '../../../services/fauna'

export default NextAuth({
  providers: [
    GitlabProvider({
      clientId: process.env.GITLAB_CLIENT_ID,
      clientSecret: process.env.GITLAB_CLIENT_SECRET,
      scope: 'read:user'
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { email } = user
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email'),
                  q.Casefold(user.email)
                )
              )
            ),
            q.Create(
              q.Collection('users'),
              { data: { email } }
            ),
            q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(user.email)
              )
            )
          )
        )

        return true
        
      } catch {
        return false
      }
    },
  }
})
