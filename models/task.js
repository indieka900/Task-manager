const Mongoose = require("mongoose");

const TaskSchema = new Mongoose.Schema({
    task_name:{
        type:String,
        required: [true,'must provided name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})



module.exports = Mongoose.model('Task', TaskSchema)