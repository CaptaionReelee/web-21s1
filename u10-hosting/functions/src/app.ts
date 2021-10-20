import * as express from 'express'
export const app = express()

app.get('/', (req, res) => res.send('Hello from Cloud Functions'))
app.get('/cheese', (req, res) => res.send('Cheese'))
