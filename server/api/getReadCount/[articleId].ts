export default defineEventHandler(async (event) => {
  try {
    const articleId = getRouterParam(event, 'articleId')
    const response = await $fetch(`https://worker.ray-d-song.com/read/${articleId}`, {
      method: 'get'
    })
    return response
  } catch (e) {
    console.log(e)
  }
})
