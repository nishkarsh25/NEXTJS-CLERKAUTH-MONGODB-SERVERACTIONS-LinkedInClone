import mongoose, { Document, Model } from "mongoose";
import { IUser } from "./user.model";
import { IComment } from "./comment.model";
export interface IPost{
    description:string,
    user:IUser,
    imageUrl?:string,
    likes?:string[],
    comments?:IComment[]
}
export interface IPostDocument extends IPost, Document{
    createdAt:Date,
    updatedAt:Date
}
const postSchema = new mongoose.Schema<IPostDocument>();
