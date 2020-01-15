var events=require('events');


var eventEmitter=new events.EventEmitter();

var eventHandler=function(){
    console.log('event handling code');
}

function show(){
    console.log('my data');
}

eventEmitter.on('firstEvent',eventHandler);

eventEmitter.emit('firstEvent',show());