import { handleRequest } from './handler'
import makeServiceWorkerEnv from 'service-worker-mock'

// eslint-disable-next-line
declare var global: any

describe('handle', () => {
  beforeEach(() => {
    Object.assign(global, makeServiceWorkerEnv())
    jest.resetModules()
  })

  test('handle GET', async () => {
    const result = await handleRequest(new Request('/', { method: 'GET' }))
    expect(result.status).toEqual(200)
  })
})
