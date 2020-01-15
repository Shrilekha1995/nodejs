//module.exports.myMessage="hello world";

// module.exports.show= function(msg){
//     console.log(msg);
// }

//module.exports= {id:1,name:"abc"};

module.exports=function(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.fullName=function(){
        return this.firstName+" "+this.lastName;
    }
}