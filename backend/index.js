// console.log("test2");
import ImageKit from "imagekit";
import express from 'express'
import cors from 'cors'

// const express=require('express');
const app=express()
const port=3000
app.use(cors({
    origin:process.env.CLIENT_URL,
}))
app.get('/',(req,res)=>{
    console.log("Hello world");
    res.send("Hello");
})
const imagekit = new ImageKit({
    urlEndpoint: process.env.VITE_IMAGEKIT_ENDPOINT,
    publicKey: process.env.VITE_IMAGEKIT_PUBLICKEY,
    privateKey: process.env.VITE_IMAGEKIT_PRIVATEKEY,
  });
  
  app.get("/api/upload", (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
  });

app.listen(port,()=>{
    console.log(`Express app is listening on port ${port}`);
})