import mongoose, { Model } from "mongoose";
import { IUser } from "./user.model";
import { Document } from "mongoose";
export interface IComment{
    textMessage:string,
    user:IUser
}
export interface ICommentDocument extends IComment, Document{
    createdAt:Date,
    updatedAt:Date
}


