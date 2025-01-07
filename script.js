// Predefined chatbot responses mapped to user messages
const chatbotResponses = {
    "hello": "Hi there! How can I assist you today?",
    "hi": "Hello! What can I do for you?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "who are you": "I'm your friendly chatbot assistant. How can I help?",
    "bye": "Goodbye! Have a wonderful day!",
    "thank you": "You're welcome! Happy to help.",
    "thanks": "You're welcome! Is there anything else I can assist with?",
    "what is your name": "I'm ChatBot, your virtual assistant.",
    "good morning": "Good morning! I hope you have a productive day.",
    "good night": "Good night! Sleep well.",
    "what can you do": "I can chat with you, answer questions, or just keep you company.",
    "tell me a joke": "Why don't skeletons fight each other? Because they don't have the guts!",
    "weather": "I'm not equipped to fetch weather updates, but it's always sunny in our chat!",
    "help": "I'm here to help! Ask me anything, or just say 'Hi'.",
    "open google": "I can't open Google for you, but you can click here: https://www.google.com",
    "time": `The current time is ${new Date().toLocaleTimeString()}.`,
    "date": `Today's date is ${new Date().toLocaleDateString()}.`,
    "how old are you": "I'm as old as the internet... just kidding, I was created recently!",
    "default": "I'm not sure I understand. Could you please rephrase your question?"
};

// DOM Elements
const chatContainerE1 = document.getElementById("chatContainer");
const userInputE1 = document.getElementById("userInput");
const sendMsgBtn = document.getElementById("sendMsgBtn");

// Event Listeners
sendMsgBtn.addEventListener("click", sendMsgToChatbot);
userInputE1.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMsgToChatbot();
    }
});

// Function to Send User Message to Chatbot
function sendMsgToChatbot() {
    const userMsg = userInputE1.value.trim().toLowerCase(); // Normalize input to lowercase
    if (!userMsg) {
        alert("Please enter a message!");
        return;
    }

    // Display user message
    const userMsgContainer = document.createElement("div");
    userMsgContainer.classList.add("msg-to-chatbot-container");
    chatContainerE1.appendChild(userMsgContainer);

    const userMsgE1 = document.createElement("span");
    userMsgE1.textContent = userInputE1.value; // Display the original case message
    userMsgE1.classList.add("msg-to-chatbot");
    userMsgContainer.appendChild(userMsgE1);

    userInputE1.value = "";
    chatContainerE1.scrollTop = chatContainerE1.scrollHeight;

    // Get chatbot reply
    setTimeout(() => getReplyFromChatbot(userMsg), 500);
}

// Function to Get Chatbot Reply
function getReplyFromChatbot(userMsg) {
    // Check if there's an exact match, else use the default
    const chatbotMsg = chatbotResponses[userMsg] || chatbotResponses["default"];

    // Display chatbot message
    const chatbotMsgContainer = document.createElement("div");
    chatbotMsgContainer.classList.add("msg-from-chatbot-container");
    chatContainerE1.appendChild(chatbotMsgContainer);

    const chatbotMsgE1 = document.createElement("span");
    chatbotMsgE1.textContent = chatbotMsg;
    chatbotMsgE1.classList.add("msg-from-chatbot");
    chatbotMsgContainer.appendChild(chatbotMsgE1);

    chatContainerE1.scrollTop = chatContainerE1.scrollHeight;
}
