import { app } from './config/app'
import { createServer } from 'http'
import { CreateWebSocketServer } from './config/websocket'

const port = 3001

const server = createServer(app)

CreateWebSocketServer(server)

server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
