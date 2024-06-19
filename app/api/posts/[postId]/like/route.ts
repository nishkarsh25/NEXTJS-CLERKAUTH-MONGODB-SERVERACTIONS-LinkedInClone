import connectDB from "@/lib/db";
import { Post } from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";

// get likes
export const GET = async (req:NextRequest, {params}:{params:{postId:string}}) => {
    
}
