const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeFile("index.html",(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(data);
        }
    })
})

server.listen(5000,()=>console.log("this server is up at 5000"));