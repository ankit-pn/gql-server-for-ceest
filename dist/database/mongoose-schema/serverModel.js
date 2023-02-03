import mongoose from "mongoose";
const serverSchema = new mongoose.Schema({
    serverId: {
        type: String,
        required: [true, "ServerId Not Found"],
        unique: [true, "ServerId Already Exists "]
    },
    serverName: {
        type: String,
        required: [true, "ServerName Not Found"],
        unique: [true, "Same ServerName Already Exists on Server, Please Choose another ServerName"]
    },
    serverStatus: {
        type: Boolean,
        required: [true, "Please Provide Status of Server(Server is On or Off"]
    },
    serverWeight: {
        type: Number,
        required: [true, "Weight Of Server Not Found"]
    },
    unitPowerCost: {
        type: Number,
        required: [true, "UnitPowerCost of server Not Found"]
    },
    totalMips: {
        type: Number,
        required: [true, "totalMips of server Not Found"]
    },
    usedMips: {
        type: Number,
        required: [true, "usedMips of server not Found"]
    },
    vms: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'VMS'
        }]
});
var Servers;
if ('Servers' in mongoose.models) {
    Servers = mongoose.model('Servers');
}
else {
    Servers = mongoose.model('Servers', serverSchema);
}
export { Servers };
// export default mongoose.model.Servers || mongoose.model("Servers",serverSchema);
