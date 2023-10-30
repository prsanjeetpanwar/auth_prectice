import mongoose from "mongoose";



export const UserSchema=new mongoose.Schema({

    username:{
       type:String,
       required:[true, "Please provide a unique username"],
       unique:[true,"Username Exists"]

    },
    password:{
        type:String,
        required:[true,"Please provide a password"],
        unique:true

    },
    email:{
        type:String,
        required:[true,"Please provide a email"],
        unique:true
    },
    firstName:{type:String},
    lastName:{type:String},
    mobile:{type:Number},
    address:{type:String},
    profile:{type:String}
})

export default mongoose.model.Users|| mongoose.model("User",UserSchema)