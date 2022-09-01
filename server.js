



const express = require(express)
const app = express()

app.get('/', function(req,res) {
    res.send('Hello World')
})



app.listen(3000)




















// const http = require('http')
// const fs = require('fs')
// const port = 3000
// const hostname = 'localhost'



// const server = http.createServer((req,res) => {
//   res.setHeader('Context-type', 'text/html')
//   let route = "./view/"
//    switch(req.url){
//     case '/':
//         console.log("hello again ")
//         route += "index.html";
//         res.statusCode= 200
//         break;
//     case "/contact":
//         route += "Contact.html";
//         res.statusCode =200
//         break;

//         case "/contact-us":
//             res.statusCode = 301,
//         res.setHeader = ('Location ', '/Contact'),
//         res.end()
//         break;
//         default:
//             route += "404.html";
//             res.statusCode = 404
//             break
//   }

// fs.readFile(route, (err,data) =>{
//     if(err){
//         console.log(err);
//         res.end()
//     }else{
        
//         res.end(data)
//     }
// })
// })





server.listen(port, () =>{
    console.log(`listening on port ${port}`)
})