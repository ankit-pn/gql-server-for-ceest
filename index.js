const { ApolloServer } = require("apollo-server-express");
const typeDefs  = require("./type-defs.js");
const resolvers = require("./resolvers.js");

const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());



const httpServer = http.createServer(app);

const startApolloServer = async (app, httpServer) => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    // server.applyMiddleware({ app });
    await server.start();
    server.applyMiddleware({ app });
}

startApolloServer(app, httpServer);

module.exports = httpServer
