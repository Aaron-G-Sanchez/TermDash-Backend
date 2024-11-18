import { CreateWebSocketServer } from '../src/config/websocket'
import { app } from '../src/config/app'
import { createServer, Server } from 'http'
import { WebSocket } from 'ws'

let server: Server

beforeAll((done) => {
  server = createServer(app)
  CreateWebSocketServer(server)
  server.listen(8080, () => {
    done()
  })
})

afterAll((done) => {
  server.close(() => {
    done()
  })
})

describe('WebSocket server', () => {
  test('should connect client to socket server', (done) => {
    let client = new WebSocket('ws://localhost:8080')

    client.on('open', () => {
      expect(client.readyState).toBe(1)
      client.close()
      done()
    })
  })
})
