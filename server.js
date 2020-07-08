const express = require ('express')
const server = express ()
const nunjucks = require ('nunjucks')
const data = require ("./data")

server.set("view engine", "njk")

server.use(express.static('public'))

nunjucks.configure("views", {
    express:server,
    autoescape: false
})

server.get("/", function(req, res){
    res.render("index", {dados: data})
})  

server.get("/about", function (req, res){
    res.render("about")
})

server.get("/recipes", function(req, res){
    res.render("recipes", {dados: data})
})




server.listen(5000, function(req, res){
})