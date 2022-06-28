const express=require('express')
const app=express()
const cors=require('cors')
const {db,Days}=require('./db.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use(express.static('/home/aditya/Desktop/WEB-TryOuts/how-was-your-day/frontend'))

app.get('/days', async (req,res)=>{
    const days=await Days.findAll()
    console.log(days)
    res.json(days)
})

app.post('/day', async (req,res)=>{

    const newDay=await Days.create({
        date:req.body.date,
        day:req.body.day,
        description:req.body.description
    })

    res.json({Success:true})

})

db.sync().then(app.listen(3232,(err)=>{
    if(err)
    throw err
    console.log("Server started at port 3232")
})).catch((err)=>{
    throw err
})