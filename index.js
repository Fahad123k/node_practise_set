const db = require('./config/db');

const express = require('express');
const app = express()



app.get('/', async (req, res) => {
    const resp = await fetch('https://dummyjson.com/todos');
    const data = await resp.json();
    res.send(data)
})

app.listen(8000, () => {
    console.log("App is running on port no 8000");
    db().catch(console.error);
})
