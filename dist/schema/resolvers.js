import { Servers } from "../database/mongoose-schema/serverModel.js";
import { VMS } from "../database/mongoose-schema/vmModel.js";
import { Tasks } from "../database/mongoose-schema/taskModel.js";
import { v4 as uuidv4 } from "uuid";
import { dbConnect } from "../database/dbConnect.js";
import { userInfo } from "os";
import { findVmServer, findTaskServer, findVm } from '../scheduling_algorithm/find_algo.js';
dbConnect();
const resolvers = {
    Query: {
        servers: async () => {
            const servers = await Servers.find();
            return servers;
        },
        vms: async () => {
            const vms = await VMS.find();
            return vms;
        },
        tasks: async () => {
            const tasks = await Tasks.find();
            return tasks;
        },
        server: async (parent, args) => {
            const serverId = args.serverId;
            const server = await Servers.find({ serverId });
            return server;
        },
        vm: async (parent, args) => {
            const vmId = args.vmId;
            const vm = await VMS.find({ vmId });
            return vm;
        },
        task: async (parent, args) => {
            const taskId = args.taskId;
            const task = await Tasks.find({ taskId });
            return task;
        },
        serverN: async (parent, args) => {
            const serverName = args.serverName;
            const server = await Servers.findOne({ serverName });
            return server;
        },
        vmN: async (parent, args) => {
            const vmName = args.vmName;
            const vm = await VMS.findOne({ vmName });
            return vm;
        },
        taskN: async (parent, args) => {
            const taskName = args.taskName;
            const task = await Tasks.findOne({ taskName });
            return task;
        },
    },
    Mutation: {
        create_server: async (parent, args) => {
            const server = args.input;
            server.serverId = uuidv4();
            const newServer = new Servers(server);
            await newServer.save().catch((err) => {
                console.log("Data Not Saved and New Server Not Created");
                console.log(err);
            });
            return await Servers.find();
        },
        create_vm: async (parent, args) => {
            const vm = args.input;
            vm.vmId = uuidv4();
            const newVM = new VMS(vm);
            const appropriate_server = await findVmServer(newVm);
            newVM.vmCurrentServer = appropriate_server;
            await newVM.save()
                .catch((error) => {
                    console.log("Data Not Saved and Virtual Machines Not Created");
                    console.log(error);
                });
            return await VMS.find();
        },
        create_task: async (parents, args) => {
            const task = args.input;
            task.taskId = uuidv4();
            const newTask = new Tasks(task);
            const appropriate_server = await findTaskServer(task);
            const appropriate_vm = await findVm(task);
            await newTask.save().catch((error) => {
                console.log("Data Not Saved And Task Not Created");
                console.log("err");
            });
            return await Tasks.find();
        }
    },
};
export { resolvers };
