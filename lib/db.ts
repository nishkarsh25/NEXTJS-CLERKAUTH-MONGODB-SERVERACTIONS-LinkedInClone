import mongoose, { Connection } from "mongoose";

let isConnected:Connection | boolean = false;

const connectDB = async () => {
    if(isConnected){
        console.log("Mongodb already connected");
        return isConnected;
    }
    
}
