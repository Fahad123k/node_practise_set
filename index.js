const db = require('./config/db');

const express = require('express');
const app = express()



app.get('/home', async (req, res) => {
    const resp = await fetch('https://dummyjson.com/todos');
    const data = await resp.json();
    res.send(data)
})

app.get('/test',(req,res)=>{
    res.send("helllo world")
})

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(8000, () => {
    console.log("App is running on port no 8000");
    db().catch(console.error);
})
