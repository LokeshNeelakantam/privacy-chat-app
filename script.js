const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    let msg = input.value.trim();
    if (msg === "") return;

    addMessage(msg, "user");
    input.value = "";
   

    // Fake realtime bot reply
    setTimeout(() => {
        addMessage("Message received ✔️", "bot");
        
    }, 600);
    setTimeout(() => {
        addMessage("Message sent success", "user");
        
    }, 1400);
}

function addMessage(text, type) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble", type);
    bubble.innerText = text;

    chatBox.appendChild(bubble);
    chatBox.scrollTop = chatBox.scrollHeight;
}
