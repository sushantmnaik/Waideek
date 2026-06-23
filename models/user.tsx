import mong from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mong.Schema({
    name : {type: String},
    username : {type: String, required:true, unique:true},
    email : {type: String, required:true, unique:true},
    password:{type: String, required:true}
})

export default mong.model("User",userSchema)