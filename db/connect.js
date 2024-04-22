const Mongoose  = require("mongoose")

const  connection_string = 'mongodb+srv://owner:xbLgrLR4x2f0jRbH@cluster0.mzmsa2d.mongodb.net/'

const connectDB = (url) => {
    return Mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}


module.exports = connectDB
