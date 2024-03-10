const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

const fakeDatabase= [{
    username:"sujith@gmail.com",
    pendingleaves: 6,
    manager:"krisv"
},
{
    username:"ananthan@gmail.com",
    pendingleaves: 6,
    manager:"krisv"
},
{
    username:"sachu@gmail.com",
    pendingleaves: 6,
    manager:"krisv"
}

]


app.get('/getUserDetails',(req,res)=>{
    console.log("look here");
    res.json({statuscode:200,result:fakeDatabase,message:""});
})



app.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`);
})