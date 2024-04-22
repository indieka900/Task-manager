const Task = require('../models/task')
const asyncWrapper = require('../middleware/async_')

const getAllTasks = asyncWrapper(
    async (req, res) => {
            const tasks = await Task.find();
            res.status(200).json(tasks)
            //res.status(200).json({tasks})
            //res.status(200).json({status:true, data: {tasks, nbHits: tasks.length}})
    }
)

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
    
})

const getTask = asyncWrapper (async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        return res.status(404).json({msg: `No task with id : ${req.params.id}`})
    }
    const { __v, ...taskInfo } = task._doc;
    res.status(200).json(taskInfo)
    
})

const updateTask = asyncWrapper(async(req, res) => {
    const {id:taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
        new:true, runValidators:true
    })
    res.status(200).json(task)
    
})

const deleteTask = asyncWrapper(async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) {
        return res.status(404).json({msg: `No task with id : ${req.params.id}`})
    }
    res.status(200).json({tas:null,status:'success',message:" Task Deleted successfully "})
})



module.exports = {
    getAllTasks,createTask,getTask,
    updateTask,deleteTask
}