const os=require('os');
var assert=require("assert");
var util=require("util");

console.log("free mem  "+os.freemem());
console.log("total mem  "+os.totalmem());

function add (a,b){
    return a+b;
}
var expected=add(1,2);
assert(expected===3, "addition is 3" );

var text="Congratulations %s for her %dth birthday";
var result=util.format(text,"pooja","24");
console.log(result);