var http=require('http');


const data={1:"one",2:"two"};
var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});

    res.write(JSON.stringify(data));
    res.end();

})
server.listen(8080);
console.log("server running on 8080");