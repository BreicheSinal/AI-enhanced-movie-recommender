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
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMsg }],
    }),
  };

  // sending the req and waiting for a response
  const response = await fetch(apiURL, requestOptions);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// updating bot response from "..." to actual response
function updateChatbotResponse(msgContent) {
  const botResponse = document.querySelector(".response .new");
  botResponse.textContent = msgContent;
  botResponse.classList.remove("new");
}
