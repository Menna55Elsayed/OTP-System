const mongoose =require('mongoose');
const User=require('../models/User');

const MONGO_URI = "mongodb+srv://OTP:12345@cluster0.xy6kv8z.mongodb.net/?appName=Cluster0";

const connectDB =async () => {
    try{
        await mongoose.connect(MONGO_URI)
        console.log('mongoDB Connected Successfully');
        await User.createCollection();
        console.log("User Collection Created Successfully")
  } catch(error){
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }   
}
connectDB();
module.exports=connectDB;