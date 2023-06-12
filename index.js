import express from 'express';
import mongoose from 'mongoose';
import Student from './models/Student.js';
import dotnv from 'dotenv';
dotnv.config();


const app = express();
 app.use(express.json());

  app.get('/student',(req,res)=>{
    const student=["harshu","aadi","aniket"];
  
res.json(Student);
})

app.listen(5000, ()=>{
    console.log('listening on port');
})

