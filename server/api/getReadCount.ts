export default defineEventHandler(async (event) => {
  try {
    const response = await $fetch(`https://worker.ray-d-song.com/read/1692667782462`, {
      method: 'get'
    })
    return response
  } catch (e) {
    console.log(e)
  }
})
