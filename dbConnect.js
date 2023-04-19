const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.DB_URL);


const dbConnect = async () => {
    await mongoose.connect(process.env.DB_URL);
    console.log('Successfully connected to MongoDB Atlas!');
};
dbConnect().catch(err => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.log(err)
});



module.exports = dbConnect;