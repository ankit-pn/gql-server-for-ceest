import { gql } from "apollo-server";
import fs from "fs";
const typeDefs = gql(
  fs.readFileSync(
    "/home/pain/Documents/gql-server-for-ceest/gql/type_defs.gql",
    "utf8"
  )
);
export { typeDefs };
