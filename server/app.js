import  Express  from "express";
import mongoose from "mongoose";
import cors from 'cors';
import postsRoutes from './routes/posts.js'
import bodyParser from "body-parser";

const app=Express()



app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())

app.use('/posts',postsRoutes)

mongoose.connect('mongodb+srv://PratikBhore:PratikBhore@cluster0.xdct4fn.mongodb.net/?retryWrites=true&w=majority',()=>{
    console.log('connected to db')

})



app.listen(8000,()=>{
    console.log('connected to backend')
})
