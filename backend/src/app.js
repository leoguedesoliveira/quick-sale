import express from 'express'
import { router } from './routes/routes.js';
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(router)
app.use(cors())

export { app }