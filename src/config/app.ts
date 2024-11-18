import express, { Express, Request, Response, NextFunction } from 'express'

export const app: Express = express()

app.get('/hello-world', (_, res: Response) => {
  res.status(200).json({ msg: 'Hello World!' })
})
