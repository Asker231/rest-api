import express, { json } from 'express'
import { default as route } from './routes/routes.js'
const app = express()

app.use(json())
app.use('/',route)


app.listen(3002,()=>{
    console.log("Server start");
    
})

app.get('/',(req,res)=>{
    try{
        res.status(200)
        res.end()
    }catch(err){
        res.status(401)
        console.log(err);
        
    }
})
