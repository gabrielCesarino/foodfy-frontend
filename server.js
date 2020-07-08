const express = require ('express')
const server = express ()
const nunjucks = require ('nunjucks')


server.set("view engine", "njk")

server.use(express.static('public'))

nunjucks.configure("views", {
    express:server,
    autoescape: false
})

server.get("/", function(req, res){
    res.render("index")
})  





server.listen(5000, function(req, res){
})