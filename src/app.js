import express from 'express'
import morgan from 'morgan'
import { PORT } from './config.js'
import languageRoutes from './routes/language.routes.js'

const app = express()

//app.set('port',3000)

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/languages',languageRoutes)

app.use((req,res,next) => {
    res.status(404).json({message:'not found'})
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})

