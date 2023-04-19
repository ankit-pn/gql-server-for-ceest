import mongoose from "mongoose";
const vmSchema = new mongoose.Schema({
    vm_id: {
        type: String,
        require: [true, "VmId Not Found"],
        unique: [true, "VmId Already Exists "],
    },
    vmName: {
        type: String,
        require: [true, "VM Name Not Found"],
        unique: [true, "VmName Already Exists"]
    },
    vmMips: {
        type: Number,
        required: [true, "Vm mips already Found"]
    },
    server_id:{
        type: String,
        required: [true, "Please Provide Current Server Id"]
    },
    task: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tasks'
    }]
});
var VMS;
if ('VMS' in mongoose.models) {
    VMS = mongoose.model('VMS');
}
else {
    VMS = mongoose.model("VMS", vmSchema);
}
export { VMS };
