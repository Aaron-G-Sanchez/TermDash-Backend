import { app } from '../src/config/app'
import request from 'supertest'

describe('app.ts test', () => {
  test('GET /hello-world', async () => {
    const response = await request(app).get('/hello-world')

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('msg', 'Hello World!')
  })
})
