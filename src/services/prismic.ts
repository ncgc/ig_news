import * as prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown){
  const client = prismic.createClient(
    process.env.PRISMIC_REPO_NAME, 
    {
      accessToken: process.env.PRISMIC_ACCESS_TO
    }
  )
  return client;
}
