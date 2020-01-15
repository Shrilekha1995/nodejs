var http=require('http');
var fs=require('fs');


fs.unlink('myfile',function(){
    console.log("deleted");
})

// fs.rename('file1.txt','myfile',function(err){
//   if(err)throw err;
//   console.log("file is renamed");

// });
http.createServer(function(req,res){
    // fs.readFile('file1.txt',function(err,data){
    //  res.writeHead(200,{'Content-Type': 'text/html'});
    //  res.write(data);
    
    




}).listen(8080);