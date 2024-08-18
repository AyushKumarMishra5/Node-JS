const http = require("http");

const port = process.env.PORT || 3000;

// Create server and listen on the specified port
const server = http.createServer((req, res)=>{
    res.setHeader('Content-type', 'text/html');
    res.end("<h1>HI this is Ayush Mishra.</h1><p>I have done my schooling from DPS and currently studing in Delhi University.</p>");
})

server.listen(port ,()=>{
    console.log("Server listening at Port :${port}");
})