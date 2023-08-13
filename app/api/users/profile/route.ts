import mongoose from "mongoose";
import { connect } from "@/database/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/User";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect()


export async function GET(request:NextRequest){
    try {
        const userId = await getDataFromToken(request);
        const user = await User.find({_id:userId}).select("-password");
        return NextResponse.json({
            msg:"User Found",
            user
        },{status:200})

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}