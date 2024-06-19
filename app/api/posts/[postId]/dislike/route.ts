import connectDB from "@/lib/db";
import { Post } from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";

// post likes
export const POST = async (req:NextRequest, {params}:{params:{postId:string}}) => {
    
}