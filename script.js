// Function to handle accepting cookies
function acceptCookies() {
    var cookiePrompt = document.getElementById("cookiePrompt");
    cookiePrompt.classList.add("fade-out");
    // Additional functionality to handle cookie acceptance can go here (e.g., setting a cookie to remember the choice)
}

// Function to handle declining cookies
function declineCookies() {
    var cookiePrompt = document.getElementById("cookiePrompt");
    cookiePrompt.classList.add("fade-out");
    // Additional functionality to handle cookie decline can go here
}

// Function to toggle the chatbot UI
function toggleChatbot() {
    var chatbotPopup = document.getElementById("chatbotPopup");
    chatbotPopup.classList.toggle("show");

    // Display welcome message if chatbot UI is opened for the first time
    var chatContainer = document.getElementById("chatContainer");
    if (!chatContainer.hasChildNodes()) {
        var botDiv = document.createElement("div");
        botDiv.className = "bot-message";
        botDiv.textContent = "Welcome to Flockin Crazy AI";
        chatContainer.appendChild(botDiv);
    }
}

// Function to handle user input in the chatbot
function handleKeyPress(event) {
    if (event.key === "Enter") {
        handleUserInput();
    }
}

// Function to handle user input in the chatbot
function handleUserInput() {
    var userInput = document.getElementById("userInput");
    var userMessage = userInput.value.trim();
    var chatContainer = document.getElementById("chatContainer");

    if (userMessage !== "") {
        // Display user message in chat
        var userDiv = document.createElement("div");
        userDiv.className = "user-message";
        userDiv.textContent = userMessage;
        chatContainer.appendChild(userDiv);

        // Handle bot response
        setTimeout(function () {
            var botDiv = document.createElement("div");
            botDiv.className = "bot-message";
            botDiv.innerHTML = getBotResponse(userMessage); // Changed to innerHTML to render strong tag properly
            chatContainer.appendChild(botDiv);

            // Scroll chat to bottom
            chatContainer.scrollTop = chatContainer.scrollHeight;

            // Clear user input
            userInput.value = "";
        }, 1000); // Simulate bot response delay
    }
}

// Function to get bot response based on user input
function getBotResponse(userMessage) {
    // Check if the user's message includes greetings and respond with a greeting
    if (userMessage.toLowerCase().includes("hey") || userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
        return "Hello, how may I assist you?";
    }

    // Check if the user's message includes "joke" and provide a random chicken joke
    if (userMessage.toLowerCase().includes("joke")) {
        var jokes = [
            "Why did the chicken join a band? Because it had the drumsticks.",
            "What do you call a group of chickens clucking in unison? A chicken symphony!",
            "Why did the chicken cross the playground? To get to the other slide.",
            "What do chickens study in school? Eggonomics!",
            "Why did the chicken sit on the egg? Because it couldn't take a stand!"
        ];
        var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        return randomJoke;
    }

    // Default response if the user's message does not match any specific condition
    return "I'm sorry, I can't help you with that. Feel free to ask me anything else!";
}

// Call the showCookiePrompt function when the page loads
document.addEventListener('DOMContentLoaded', function () {
    var cookiePrompt = document.getElementById("cookiePrompt");
    cookiePrompt.classList.add("show");

    // Check if the user is on a mobile device
    if (isMobile()) {
        console.log("User is on a mobile device");
        // Additional mobile-specific logic can be added here
    } else {
        console.log("User is on a laptop/desktop");
        // Additional laptop/desktop-specific logic can be added here
    }
});

// Check if the user is on a mobile device
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
