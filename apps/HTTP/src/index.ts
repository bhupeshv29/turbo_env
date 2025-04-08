import dotenv from 'dotenv'
import express from "express";
const app =  express();


dotenv.config({path:'../../../.env'})



app.use(express.json())


const JWT_SECRET = process.env.JWT_SECRET
console.log("jwtsecret", JWT_SECRET);

app.listen(3004);

