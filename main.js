const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {}

const customEmitter = new CustomEmitter();

function simulateUserLogin(userId) {
    setInterval(() => {
        const timestamp = new Date().toISOString();
        console.log(`${timestamp}: USER_${userId} logged in`);
        customEmitter.emit('userLoggedIn', userId);
    }, Math.random() * 1900 + 100); // Random time between 0.1 to 2 seconds
}

// Listen for userLoggedIn event
customEmitter.on('userLoggedIn', (userId) => {
    console.log(`User ${userId} logged in`);
});

// Simulate multiple users logging in
simulateUserLogin(1);
simulateUserLogin(2);
simulateUserLogin(3);

module.exports = customEmitter;
