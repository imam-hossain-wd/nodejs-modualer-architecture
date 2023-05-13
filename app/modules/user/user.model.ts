import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const UserSchema = new Schema<IUser>({
    name:{
        type:String,
        require:true,
    },
    id:{
    type:String
    },
    gander: {
        type:String,
        enum:["male", "female"],
        require: true
    },
    role:{
        type:String
    },
    address:{
        type:String
    }
})

  
   //creating a model
   export const User = model<IUser>('user', UserSchema);

