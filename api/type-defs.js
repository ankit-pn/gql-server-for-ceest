const { gql } = require('apollo-server-express');

const typeDefs = gql`# It is gql file for server_manager


type Task{
    task_id: String!
    taskName: String!
    taskLength: Int!
    communicationCost: Int!
    taskDeadline: String!
    server_id: String!
    vm_id: String
}
type VM{
    vm_id: String!
    vmName: String!
    vmMips: Int!
    task: [Task!]
    server_id: String!
}
type Server{
    server_id: String!
    server_name: String!
    unit_power_cost: Int!
    total_mips: Int!
}


input CreateVMInput{
    vmName: String!
    vmMips: Int!
}

input CreateTaskInput{
    taskName: String!
    taskLength: Int!
    communicationCost: Int!
    taskDeadline: String!
    vm_id: String!
}

type Mutation{
    create_vm(input: CreateVMInput!): [VM!]!
    create_task(input: CreateTaskInput!): [Task!]!
    # delete_vm(input: DeleteVMInput!): [VM!]!
    # delete_task(input: DeleteTaskInput!): [Taks!]!
}

type Query {
      server_details: Server!
      vms: [VM!]!
      tasks: [Task!]!
}`;

module.exports = typeDefs;