import { Env } from '..'

interface ViewCountObj {
  view_count: number
}

export default async function readHandler(articleId: string, env: Env): Promise<Response> {
  const db = env.DB
  const batchRes = await db.batch([
    db.prepare('UPDATE view_tracking SET view_count=view_count+1 WHERE article_id = ?').bind(articleId),
    db.prepare('SELECT view_count FROM view_tracking WHERE article_id = ?').bind(articleId)
  ])

  const viewCountVal = batchRes[1]===null ? 0 : (batchRes[1].results[0] as ViewCountObj)['view_count']
  return new Response(String(viewCountVal))
}