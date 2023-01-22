import express from 'express'
import morgan from 'morgan'

const app = express()

app.set('port',3000)

app.use(morgan('dev'))
app.use(express.json())

export default app
