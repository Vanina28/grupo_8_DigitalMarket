const express = require ("express")
const path = require("path")
const servidor = express()

const publicFolderPath = path.resolve(__dirname, "./public")
servidor.use(express.static(publicFolderPath));

servidor.listen (5050, ()=> {
    console.log("Servidor funcionando")
})

servidor.get ("/home", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/home.html"))
})

servidor.get ("/productCart", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/productCart.html"))
})

servidor.get ("/register", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/register.html"))
})

servidor.get ("/login", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/login.html"))
})

servidor.get ("/productdetail", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/productdetail.html"))
})