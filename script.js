const messageContainer = document.getElementById('message-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        displayMessage('user', userMessage);
        respondToUser(userMessage);
        userInput.value = '';
    }
}

function respondToUser(message) {
    setTimeout(() => {
        const botResponse = `You said: "${message}". This is a simulated bot response.`;
        displayMessage('bot', botResponse);
    }, 1000);
}

function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

function playTemachSound() {
    let audio = new Audio('no_mi_compa.mp3');
    audio.play();
}