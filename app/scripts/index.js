botBttn.addEventListener("click", function () {
  const chatbox = document.getElementById("chatbox");
  console.log("im here");
  chatbox.style.display =
    chatbox.style.display === "none" || chatbox.style.display === ""
      ? "block"
      : "none";
});

const apiURL = "https://api.openai.com/v1/chat/completions";
const apiKey =
  "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";

//const apiKey = "";

let msgHistory = [];

//  adding event handler "onclick"
sendBtn.onclick = async function () {
  if (messageBar.value.trim().length > 0) {
    const userMessage = messageBar.value.trim(); // trim(): removing spaces
    messageBar.value = ""; // clearing input field

    addUserMessage(userMessage);
    addChatbotPlaceholder();

    // adding user msg to msghistory
    msgHistory.push({ role: "user", content: userMessage });

    // trim the history to the last 5 messages (managing token limit)
    msgHistory = msgHistory.slice(-5);

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

// adding temproray "..." inside placeholder of bot ressponse
function addChatbotPlaceholder() {
  const responseDiv = document.createElement("div");
  responseDiv.className = "chat flex align-center response";

  const img = document.createElement("img");
  img.src = "./assets/images/botlogo.png";

  const span = document.createElement("span");
  span.className = "new";
  span.textContent = "...";

  responseDiv.appendChild(img);
  responseDiv.appendChild(span);
  messageBox.appendChild(responseDiv);
}

// sending post request to open AI API
async function fetchData(userMsg) {
  const requestOptions = {
    method: "POST", // HTTP method
    headers: {
      "Content-Type": "application/json", // content = json
      Authorization: `Bearer ${apiKey}`, // authorization using API key
    },
    body: JSON.stringify({
      // converting body to a JSON string to be sent to API
      model: "gpt-3.5-turbo-0125",
      messages: [{ role: "user", content: userMsg }],
    }),
  };

  // sending the req and waiting for a response
  const response = await fetch(apiURL, requestOptions);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log("API Response:", data);
  return data.choices[0].message.content;
}

// updating bot response from "..." to actual response
function updateChatbotResponse(msgContent) {
  const botResponse = document.querySelector(".response .new");
  botResponse.textContent = msgContent;
  botResponse.classList.remove("new");
}

// error response of bot
function showError(errorMsg) {
  const botResponse = document.querySelector(".response .new");
  botResponse.textContent = errorMsg;
  botResponse.classList.remove("new");
}
