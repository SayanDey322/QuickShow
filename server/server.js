import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"


const app = express();
const port = 3000;

await connectDB()

//Middlewares
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

app.get('/', (req, res)=> res.send('Server is Live!'))
app.use('/api/inngest', serve({ client: inngest, functions }))

app.listen(port, ()=> console.log(`Server listening at http://localhost:${port}`));
