import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    taskId: {
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
        requird: [true, 'Please Provide Communication Cost of task']
    },
    currentVM: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VMS'
    },
    currentServer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Servers'
    }
});
var Tasks;
if ('Tasks' in mongoose.model) {
    Tasks = mongoose.model('Tasks');
}
else {
    Tasks = mongoose.model('Tasks', taskSchema);
}
export { Tasks };
