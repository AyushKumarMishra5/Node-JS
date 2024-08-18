const http = require("http")

const port = process.env.PORT || 3000;

const server=http.createServer((req, res)=>{
    res.setHeader("Contnet-type", "text/html");
    res.end("<h1>This was just a practise page to check wheater i am able to create an server or not!</h1>")
})

server.listen(port, ()=>{
    console.log("Server is listening to the port:${port}");
})