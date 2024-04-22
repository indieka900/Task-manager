require('dotenv').config()
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
//middleware
app.use(express.static('./public'));
const connectDb = app.use(express.json())

app.use('/api/v1/tasks', tasks)
app.use(notFound)

const port = process.env.port

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server is listening on port ${port}...`))

    } catch (error) {
        console.log(error);
    }
}

start()

