const socket = io();

// DOM Elements
const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("messageInput");
const messages = document.getElementById("messages");

// Handle form submission
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const message = messageInput.value;

  // Emit the message to the server
  socket.emit("chatMessage", message);

  // Clear the input field
  messageInput.value = "";
});

// Listen for incoming messages
socket.on("chatMessage", ({ id, message }) => {
  const messageElement = document.createElement("li");
  messageElement.textContent = `${id}: ${message}`;
  messages.appendChild(messageElement);

  // Auto-scroll to the latest message
  messages.scrollTop = messages.scrollHeight;
});
