botBttn.addEventListener("click", function () {
  const chatbox = document.getElementById("chatbox");
  console.log("im here");
  chatbox.style.display =
    chatbox.style.display === "none" || chatbox.style.display === ""
      ? "block"
      : "none";
});

const apiURL = "https://api.openai.com/v1/chat/completions";
//const apiKey =
//  "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";

const apiKey = "";

//  adding event handler "onclick"
sendBtn.onclick = async function () {
  if (messageBar.value.trim().length > 0) {
    const userMessage = messageBar.value.trim(); // trim(): removing spaces
    messageBar.value = ""; // clearing input field

    addUserMessage(userMessage);
    addChatbotPlaceholder();

    //passing user msg to get bot response
    try {
      const response = await fetchData(userMessage);
      updateChatbotResponse(response);
    } catch (error) {
      showError("Oops! An error occurred. Please try again.");
    }
  }
};

// adding user msg to chatbox
function addUserMessage(msg) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "chat flex align-center message";

  const img = document.createElement("img");
  img.src = "./assets/images/userIcon.png";

  const span = document.createElement("span");
  span.textContent = msg;

  messageDiv.appendChild(img);
  messageDiv.appendChild(span);
  messageBox.appendChild(messageDiv);
}

function addChatbotPlaceholder() {}

async function fetchData(userMsg) {}

function updateChatbotResponse(msgContent) {}

function showError(errorMsg) {}
