import mongoose, { Document, Model } from "mongoose";
export interface IUser{
    firstName:string,
    lastName:string,
    userId:string,
    profilePhoto?:string,
    bio?:string
}
export interface IUserDocument extends IUser, Document{
    createdAt:Date,
    updatedAt:Date
}

