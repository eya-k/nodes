// //1-hello world
// console.log("Hello, World!")


// //2-creating a server
// const http = require('http');

// const server = http.createServer(function (req, res) {
//   res.write('<h1>Hello node !!!!!</h1>');
//   res.end();
// });

// server.listen(3000, (err) => {
//   err ? console.log(err) : console.log('The Server is Running on port 3000');
// });


//3- create file system
 const fs =require("fs")


//     //create a file
//      fs.writeFile("welcome.txt","hello node ",err=>{
//          if(err){console.log(err)}  else{
//              console.log("created with success")
            
//              fs.readFile("welcome.txt",(err,file)=>{
//                  if(err){
//                      console.log(err)
//                 }else{
//                      console.log(file)
//                  }
//          })
            
//         } 
            
            
//     })

       //  rename file

//   fs.rename('welcome.txt',"hello.txt",err=>{
//      err?console.log(err):console.log("renamed succefuly")
//   })

var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});

console.log(password);