import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide your Name."]
    },
    email:{
        type:String,
        required:[true,"Please provide your Email."],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please provide Password."]
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model('User',userSchema);

export default User;