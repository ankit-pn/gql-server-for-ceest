const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    task_id: {
        type: String,
        required: [true, "Provide taskId"],
        unique: [true, "TaskId Must Be Unique"]
    },
    taskName: {
        type: String,
        required: [true, 'Please Provide Task Name'],
        unique: [true, "Task Name Must Be Unique"]
    },
    taskLength: {
        type: Number,
        required: [true, 'Please Provide Task Length']
    },
    communicationCost: {
        type: Number,
        required: [true, 'Please Provide Communication Cost of task']
    },
    taskDeadline:{
        type: String,
        required: [true,"Please Provide task Deadline"]
    },
    vm_id: {
        type: String,
        required: [true, "Please provide current virtual machine Id"]
    },
    server_id: {
        type: String,
        required: [true,"Please Provide current server Id"]
    }
});
var Tasks;
if ('Tasks' in mongoose.model) {
    Tasks = mongoose.model('Tasks');
}
else {
    Tasks = mongoose.model('Tasks', taskSchema);
}

module.exports = Tasks;
