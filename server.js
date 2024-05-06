const express = require('express')
const axios = require("axios")

const app = express()

const port =3000;

app.get("/",(req,res)=>{
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        console.log(response)
    }).catch((err)=>{
        console.log(err)
    })
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`Server is running on port `,port)
})