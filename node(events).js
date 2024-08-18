const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Sleep', () => {
  console.log('I think you should go to the bed Now!');
  setTimeout(()=>{
    console.log("I'll not repeat again , you must go to the bed now!")
  },5000)
});
console.log("You are being watched");
console.log("You are really being watched dont try to escape.")
myEmitter.emit('Sleep');

// these are events in node js which provides the output when the even is fired.
// here the emit function is used to fire the even created.