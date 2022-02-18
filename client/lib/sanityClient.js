import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'vn0q38zh',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skMYme4TkphPcDQw3LJem5EaZeAINLjdymXCfMRRhSnoEWoRCTYKQQiJYK0iOLkntbLdtIWFbJxT4KtKTCOzW8HMAoBfbUbYvdRWnn5yuybrkeSj76IIH4O0jcCw0BsXn9zjQ7SBmcRC821Z6Vx1fVhLUMeRi2DeZSqCDHQkpTZrN1Ezu8gp',
  useCdn: false,
})
