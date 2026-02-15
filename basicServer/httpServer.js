const http = require("http");
const PORT = 3000;

const server = http.createServer( (req,res) =>{

        if(req.url == "/") res.end("homepage");
        else if(req.url == "/about") res.end("about page");
        else if(req.url == "/contact") res.end("contact page");

})


server.listen(PORT , ()=>{
    console.log("server started ");
    console.log("visit localhost:3000");
})
