const mongoose = require("mongoose");

const connectDB = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
    }
};




module.exports = connectDB
