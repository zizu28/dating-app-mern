import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import cardRouter from './routes/cards.route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.ORIGIN_URL)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use(cors())
app.use(express.json())
app.use('/api/dating', cardRouter)
app.use(cookieParser())

app.listen(PORT, () => {
    connectDB()
    console.log(`Server running on port ${PORT}`)
})