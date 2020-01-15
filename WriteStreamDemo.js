var fs=require('fs');
var data="good morning shrilekha";

var writeStream=fs.createWriteStream('file4.txt');

writeStream.write(data,'UTF8');

writeStream.end();
