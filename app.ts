import express, { Application } from "express";
import mongoose from "mongoose";
import cors from 'cors';
const app:Application = express();

//Application routes
import userRoutes from './app/modules/user/user.route'

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const run = async () => {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/test');
      console.log(`connect with database successfully`);

      app.use('/api/v1/user',userRoutes )


    } catch (error) {
      console.log(error);
    }
  };
  
  run().catch(err => console.log(err))

 

  export default app;