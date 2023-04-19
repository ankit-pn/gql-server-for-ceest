import app from "./index.js";
import consola from "consola";
import dotenv from "dotenv";
dotenv.config();
app.listen(9000, () => consola.info("Server started"));