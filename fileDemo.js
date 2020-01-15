var fs=require('fs');

var data=fs.readFileSync('file1.txt');
console.log(data.toString());
console.log("operation ended");
var data=fs.readFileSync('file2.txt');
console.log(data.toString());
console.log("operation ended");
var data=fs.readFileSync('file3.txt');
console.log(data.toString());
console.log("operation ended");

// fs.readFile('file2.txt',function(err,data){
//     if(err)
//     throw err;

//     console.log(data.toString());
// })
// fs.readFile('file3.txt',function(err,data){
//     if(err)
//     throw err;

//     console.log(data.toString());
// })