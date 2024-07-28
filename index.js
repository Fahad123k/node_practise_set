const db= require('./config/db');

const express= require('express');
const app=express()

async function  getPost()
{
    const resp=  await fetch('https://dummyjson.com/todos');
    const data=  await resp.json();

    console.log(data);
}


getPost()

app.get('/',(req,res)=>{
res.send("hello")
})

app.listen(8000,()=>{
    console.log("App is running on port no 8000");
    db().catch(console.error);
})
