import { connect } from "@/database/dbConfig";
import User from "@/models/User"; 
import bcrypt from "bcrypt";
import {NextRequest,NextResponse} from "next/server"

connect();

export async function POST(req:NextRequest){
    try {
        const {name, email, password} = await req.json();

        //Check User Existence
        const checkUser = await User.findOne({email})
        if(checkUser){
            return NextResponse.json({msg:"User Already Exists!"},{status:403})
        }

        //Validations
        if (!name || typeof name !== "string") {
            return NextResponse.json({ msg: "Invalid Name" },{status:400});
        }
        
        if (!email || typeof email !== "string") {
            return NextResponse.json({ msg: "Invalid Email" },{status:400});
        }

        if (!password || typeof password !== "string") {
            return NextResponse.json({ msg: "Invalid Password" },{status:400});
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create User
        const newUser = new User({
            name,
            email,
            password:hashedPassword
        });

        await newUser.save();

        return NextResponse.json({
            msg: "User created successfully"
        },{status:201})

    } catch (err:any) {
        return NextResponse.json({msg: err.message}, {status: 500})
    }
}