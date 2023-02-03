import mongoose from "mongoose";
const vmSchema = new mongoose.Schema({
    vmId: {
        type: String,
        require: [true, "VmId Not Found"],
        unique: [true, "VmId Already Exists "],
    },
    vmName: {
        type: String,
        require: [true, "VM Name Not Found"],
        unique: [true, "VmName Already Exists"]
    },
    vmWeight: {
        type: Number,
        required: [true, "Vm Weight Exists"]
    },
    vmMips: {
        type: Number,
        required: [true, "Vm mips already Found"]
    },
    vmCurrentServer: {
        // required:[true,"We need Current Server Of This Virtual Machine Before Inserting it into that server"],
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Servers'
    },
    task: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tasks'
        }],
    status: {
        type: Boolean,
        required: [true, "Please Provide Status Of Virtual Machine"]
    }
});
var VMS;
if ('VMS' in mongoose.models) {
    VMS = mongoose.model('VMS');
}
else {
    VMS = mongoose.model("VMS", vmSchema);
}
export { VMS };
