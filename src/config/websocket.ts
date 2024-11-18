import { Server } from 'http'
import { WebSocketServer, WebSocket } from 'ws'

/**
 *
 * @param server
 * @description helper function to create attach a new websocket server.
 */
export const CreateWebSocketServer = (server: Server) => {
  let wss = new WebSocketServer({ server })

  wss.on('connection', (ws: WebSocket) => {
    console.log('Client connected')

    ws.on('message', (msg: string) => {
      console.log('msg received: %s', msg)
      ws.send(msg)
    })

    // ws.on('close', () => {
    //   console.log('Client disconnected')
    // })
  })
}
