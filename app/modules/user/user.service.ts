import { User } from "./user.model";

 const createDataToSaveDb = async() => {
    const user = new User({
        name:"kanowar",
        id:"15787",
        gander: "male",
        role:"student",
        address:"notika"
    })
    await user.save();
    console.log(user);
    return user;
 
    }
    createDataToSaveDb()
    export default createDataToSaveDb;