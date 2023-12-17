import { Env } from '..';

export default async function createHandler(articleId: string, env: Env) {
  const db = env.DB
  const execRes = await db.prepare('INSERT INTO view_tracking (article_id, view_count) values (?, 1)')
    .bind(articleId)
    .run()
  if(execRes.error) {
    throw { code: 500, msg: 'err exec'}
  }
  return new Response(null, {status: 200})
}