import { VMS } from "./vmModel.js";
import { Tasks } from "./taskModel.js";
import { v4 as uuidv4 } from "uuid";
import { dbConnect } from "./dbConnect.js";
import serverConfig from './config.json' assert {type: "json"};
dbConnect();
const resolvers = {
    Query: {
        server_details: async () => {
            // const servers = await Servers.find();
            return serverConfig;
        },
        vms: async () => {
            const vms = await VMS.find({server_id:serverConfig.server_id}).populate('task');
            return vms;
        },
        tasks: async () => {
            const tasks = await Tasks.find({server_id:serverConfig.server_id});
            return tasks;
        }
    },
    Mutation: {
        create_vm: async (parent, args) => {
            const vm = args.input;
            vm.vm_id = uuidv4();
            vm.server_id = serverConfig.server_id;
            const newVM = new VMS(vm);
            await newVM.save()
                .catch((error) => {
                    console.log("Data Not Saved and Virtual Machines Not Created");
                    console.log(error);
                });
            return await VMS.find().populate('task');
        },
        create_task: async (parents, args) => {
            const task = args.input;
            task.task_id = uuidv4();
            task.server_id = serverConfig.server_id;
            const newTask = new Tasks(task);
            await newTask.save().catch((error) => {
                console.log("Data Not Saved And Task Not Created");
                console.log("err");
            });

            const vm = await VMS.findOne({vm_id:task.vm_id});
            vm['task'].push(newTask);
            await vm.save();
            return await Tasks.find();
        }
    },
};
export { resolvers };
