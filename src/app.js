import express from 'express'
import morgan from 'morgan'
import { PORT } from './config.js'
import lenguageRoutes from './routes/lenguage.routes.js'

const app = express()

//app.set('port',3000)

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/languages',lenguageRoutes)

app.use((req,res,next) => {
    res.status(404).json({message:'not found'})
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})

