import { serverQueryContent } from '#content/server'
import { timeStamp } from 'console'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://ray-d-song.com'
  })

  sitemap.write({
    url: '',
  })
  for (const doc of docs) {
    sitemap.write({
      url: 'post' + `${doc._path}`,
      lastod: Number(doc._path?.substr(1))
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
