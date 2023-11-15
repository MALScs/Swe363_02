const readline = require('readline');

const responses = {
  'What is your name?': 'My name is Chatbot.',
  'How are you?': 'I am doing well, thank you!',
  'What time is it?': () => new Date().toLocaleTimeString(),
  'exit': 'Goodbye! Exiting the chatbot.'
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getResponse(input) {
  return responses[input] || 'I am not sure how to respond to that.';
}

function startChat() {
  rl.question('Hello! How can I assist you? (Type "exit" to quit)\n', (answer) => {
    const response = getResponse(answer);
    if (answer.toLowerCase() === 'exit') {
      console.log(responses['exit']);
      rl.close();
    } else {
      console.log(response instanceof Function ? response() : response);
      startChat();
    }
  });
}

// Start the chat
startChat();
