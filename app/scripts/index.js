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
sendBtn.onclick = async function () {};

function addUserMessage(msg) {}

function addChatbotPlaceholder() {}

async function fetchData(userMsg) {}

function updateChatbotResponse(msgContent) {}

function showError(errorMsg) {}
