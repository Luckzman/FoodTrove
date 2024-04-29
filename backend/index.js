import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOption = {
    origin: true
}

app.get('/', (req, res) => {
    res.send('Api is working')
})

mongoose.set('strictQuery', false)
const connectDB = async () => {
    try {
        if(process.env.MONGO_URL){
            await mongoose.connect(process.env.MONGO_URL)
            console.log('MongoDB database is connected')
        }
    } catch (error) {
        console.log('MongoDB database connection failed')
    }
}

// middlewares
app.use(express.json())
app.use(cors(corsOption))
app.use('/api/v1/auth', authRoute)


app.listen(port, () => {
    connectDB();
    console.log('Server is running on port ' + port)
})