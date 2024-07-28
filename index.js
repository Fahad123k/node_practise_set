const db = require('./config/db');

const express = require('express');
const app = express()



app.get('/home', async (req, res) => {
    try{
        const resp = await fetch('https://dummyjson.com/todos');
    const data = await resp.json();
    res.send(data)
    }
    catch (err){
        res.status(500).send({err:"An error occured while fetching data"})
    }
    
})

app.get('/test',(req,res)=>{
    res.send("helllo vercel")
})

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/user",(req,res)=>{
    res.send({"user":"Hi users"})
})


app.listen(8000, () => {
    console.log("App is running on port no 8000");
    db().catch(console.error);
})
