import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {userRouter} from './routes/users.js';
import {recipeRouter} from './routes/recipes.js';
import {DB_CONNECTION} from './env.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipe", recipeRouter);



mongoose.connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});





app.listen(3001,()=>{ console.log("Started on port 3001 !!!") })