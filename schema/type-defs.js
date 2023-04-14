import { gql } from 'apollo-server';
import fs from 'fs';
const typeDefs = gql(fs.readFileSync('schema/type_defs.gql', 'utf8'));
export { typeDefs };