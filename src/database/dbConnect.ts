import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.DB_URL);

const dbConnect = async () => {
  await mongoose.connect(
    "mongodb+srv://ankit-pn:qwertyuiop@file-data.hmhtm.mongodb.net/authDB?retryWrites=true&w=majority"
  );
  console.log("Successfully connected to MongoDB Atlas!");
};
dbConnect().catch((err) => {
  console.log("Unable to connect to MongoDB Atlas!");
  console.log(err);
});

export { dbConnect };