var emitter=require('events').EventEmitter;

var em=new emitter();


em.addListener('FirstEvent',function(data){
    console.log("first subscriber" +data);
});

em.addListener('SecondEvent',function(data){
    console.log("second subscriber" +data);
});


em.emit('FirstEvent',"hello world");
em.emit('SecondEvent',"good morning  world");