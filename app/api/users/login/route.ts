import User from "@/models/User";
import bcrypt from "bcrypt";
import { connect } from "@/database/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect()

export async function POST(req:NextRequest) {
    try {

        const {email, password} = await req.json();

        //Check if user exists
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({msg: "User does not exist"}, {status: 404})
        }

        //Check if password is correct
        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({msg: "Invalid password"}, {status: 400})
        }

        //Create Token Data
        const tokenData = {
            id: user._id
        }
        
        //Create Token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

        const response = NextResponse.json({msg: "Login successful"},{status:200});
        response.cookies.set("token", token, {httpOnly: true})

        return response;

    } catch (err:any) {
        return NextResponse.json({msg: err.message}, {status: 500})
    }
}
