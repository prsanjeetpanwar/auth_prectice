import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
// import router from './routers/route'
import routers from './routers/Route.js';


const app=express()


app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by')



app.use('/api',routers)

const port=3002
mongoose.connect('mongodb+srv://auth:auth@cluster0.vplteaa.mongodb.net/auth?retryWrites=true&w=majority').then(()=>console.log("Connected successfully")).catch((err)=>console.log(err))

app.get('/',(req,res)=>{
    res.status(201).json("Home get requret")
})

app.listen(port,()=>console.log(`app are listen on ${port}`))








