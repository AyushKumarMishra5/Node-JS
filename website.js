const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server=http.createServer((req, res)=>{
    res.setHeader("Contnet-type", "text/html");
    if(req.url=="/"){
        res.statusCode=200;
        res.end("<h1>This was just a practise page to check wheater i am able to create an server or not!</h1>");
    }
    else if(req.url=="/check"){
        res.statusCode=200;
        fs.readFile("index.html", (err, data) => {
            if (err) {
                console.error(err);
                res.end("Error reading file");
            } else {
                res.end(data.toString());
            }
        });
    }
    else{
        res.statusCode=404;
    }
})

server.listen(port, ()=>{
    console.log("Server is listening to the port:${port}");
})