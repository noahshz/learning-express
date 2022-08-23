const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// do something when event is running
customEmitter.on('response', () => {
    console.log(`data recieved`);
});
customEmitter.on('myevent', (name, age) => {
    console.log(`this is my event. im ${name} and im ${age} years old`);
});

// runs the event
customEmitter.emit('response');
customEmitter.emit('myevent', 'noah', 18);