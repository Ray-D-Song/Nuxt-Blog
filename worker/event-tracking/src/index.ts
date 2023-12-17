import createHandler from './handlers/create'
import readHandler from './handlers/read'

export interface Env {
  DB: D1Database
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    try {
      const url = request.url.split('/')
      const articleId = url.pop()
      const handleType = url.pop()
      if(articleId?.length !== 13) {
        throw { code: 400, msg: 'err param' }
      }
      switch (handleType){
        case 'read':
          return readHandler(articleId, env)
        case 'create':
          return createHandler(articleId, env)
        default:
          throw { code: 400, msg: 'err handle type' }
      }
    } catch(e: any) {
      return new Response(e.msg, {status: e.code})
    }
  }
}