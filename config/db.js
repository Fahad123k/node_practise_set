const mongoose = require('mongoose');
require('dotenv').config()
async function connectdb(){
    const uri= process.env.MONGO_URI;    
    try {
       
        await mongoose.connect(uri,{
   
        })
        
        console.log('Connected to mongodb Atlas');

   
    } catch (error) {
        console.log(error);
    }
    finally{

        await mongoose.connection.close();
    }
}

// connectdb().catch(console.error)

module.exports =connectdb;