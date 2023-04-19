import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./schema/type-defs.js";
import { resolvers } from "./schema/resolvers.js";

import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import express from "express";
import cors from "cors";

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

export default httpServer;
