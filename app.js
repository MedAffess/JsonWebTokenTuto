require("dotenv").config();
require("./config/database").connect();
const express=require("express");

const app =express();

app.use(express.json());
app.use('/tuto',require('./routes'));
//importing the user context
const User =require("./model/user");




module.exports=app;
