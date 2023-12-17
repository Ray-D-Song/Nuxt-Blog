import { unstable_dev, type UnstableDevWorker } from 'wrangler'
import { describe, beforeAll, afterAll, it, expect } from 'vitest'

describe('Event Tracking', () => {
  let worker: UnstableDevWorker

  beforeAll(async () => {
    worker = await unstable_dev('src/index.ts', {
      experimental: { disableExperimentalWarning: true }
    })
  })

  afterAll(async () => {
    await worker?.stop()
  })

  it.skip('should return path param', async () => {
    const response = await worker.fetch('https://thorn.com/read/1701870426245')
    const str = await response.text()
    expect(str).toBe('1701870426245')
  })

  it("should return new view_count", async () => {
    const response = await worker.fetch('https://thorn.com/read/1692667782462')
    const str = await response.text()
    console.log(str)
    expect(str).toBeTypeOf('string')
  })

  it('should return 400', async () => {
    const response = await worker.fetch('https://thorn.com/create/170187042624')
    const code = response.status
    expect(code).toBe(400)
  })

  it('should return 200', async () => {
    const response = await worker.fetch('https://thorn.com/create/1701870426247')
    const code = response.status
    console.log(await response.text())
    expect(code).toBe(200)
  })
})