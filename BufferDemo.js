var buf=new Buffer("hello");
var buf2=new Buffer("morning ");
var buf3=Buffer.concat([buf,buf2]);
var json=buf2.toJSON(buf2);
var result=buf.compare(buf2);

var buf4=new Buffer(10);
buf.copy(buf4);

var buf5=buf2.slice(0,3);
console.log(buf5.toString());