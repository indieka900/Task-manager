const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks)
        //res.status(200).json({tasks})

    } catch (error) {
        res.status(500).json({msg: "An error occurred"})
    }

}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task}) 
    } catch (error) {
        res.status(500).json({msg: "An error occurred"})
    }
    
}

const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({msg: `No task with id : ${req.params.id}`})
        }
        const { __v, ...taskInfo } = task._doc;
        res.status(200).json(taskInfo)
    } catch (error) {
        //console.log(error);
        res.status(500).json({msg: "An error occurred"})
    }
}

const updateTask = async(req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true, runValidators:true
        })
        res.status(200).json(task)
    } catch (error) {
        
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).json({msg: `No task with id : ${req.params.id}`})
        }
        res.status(200).json({tas:null,status:'success',message:" Task Deleted successfully "})
    } catch (error) {
        res.status(500).json({msg: "An error occurred"});
    }
}



module.exports = {
    getAllTasks,createTask,getTask,
    updateTask,deleteTask
}