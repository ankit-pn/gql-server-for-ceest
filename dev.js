const app = require("./api/index.js");
const consola = require("consola");
const dotenv = require("dotenv");
dotenv.config();

app.listen(9000, () => consola.info("Server started"));