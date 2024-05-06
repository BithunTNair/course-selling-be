const mongoose= require('mongoose');
const dotenv= require('dotenv');
dotenv.config()
console.log(process.env.DB_URL);
const connectDB= async()=>{
    try{
        await mongoose.connect("mongodb+srv://moonstar456:zKaUdiruktGazGBt@cluster0.i7d935y.mongodb.net/");
        console.log('mongodb connected');
    }catch(error){
        console.log(error);
    }
};
module.exports=connectDB;