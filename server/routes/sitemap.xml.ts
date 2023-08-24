import { serverQueryContent } from '#content/server'

const formatDate = (param: number) => {
    const date = new Date(param)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).find()
  const currentDate = (new Date()).getTime()

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

  const lastmod = formatDate(currentDate)
  xml += `
    <url>
      <loc>https://ray-d-song.com</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>monthly</changefreq>
    </url>`

  for (const doc of docs) {
    const formattedDate = formatDate(Number(doc._path?.substr(1)))
    const str = `
    <url>
      <loc>https://ray-d-song.com/post${doc._path}</loc>
      <lastmod>${formattedDate}</lastmod>
      <changefreq>monthly</changefreq>
    </url>\n`

    xml += str
  }

  xml += '</urlset>'
  return Buffer.from(xml, 'utf-8')
})

