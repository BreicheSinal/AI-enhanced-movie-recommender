const userType = localStorage.getItem("user_type");
if (userType === "admin") {
  document.getElementById("adminDashboardLink").style.display = "block";
}
getStarted.addEventListener("click", function () {
  window.location.href =
    "http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/signup.html";
});
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

sigIN.addEventListener("click", function () {
  window.location.href =
    "http://localhost/AI-enhanced-movie-recommender-main/AI-enhanced-movie-recommender/app/pages/login.html";
});

let msgHistory = [];

sendBtn.onclick = async function () {
  if (messageBar.value.trim().length > 0) {
    const userMessage = messageBar.value.trim();
    messageBar.value = "";

    addUserMessage(userMessage);
    addChatbotPlaceholder();

    msgHistory.push({ role: "user", content: userMessage });

    msgHistory = msgHistory.slice(-5);

    //passing user msg to get bot response
    try {
      console.log("Sending message:", userMessage);
      saveMsg(userMessage, "user"); // saving user msg in db
      const response = await fetchData(userMessage);
      console.log("Response received:", response);

      updateChatbotResponse(response);
      saveMsg(response, "bot"); // saving bot response in db
    } catch (error) {
      console.error("Error details:", error);
      showError("Oops! An error occurred. Please try again.");
    }
  }
};

function saveMsg(message, senderType) {
  const data = {
    message: message,
    sender_type: senderType,
  };
  console.log(data); // Check what you're sending

  axios
    .post(
      "http://localhost/AI-enhanced-movie-recommender-main/Ai-enhanced-movie-recommender/server/saveMsg.php",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      if (response.data.status === "Successful") {
        console.log("Message saved successfully");
      } else {
        console.log("Message not saved");
      }
    })
    .catch(function (error) {
      console.error("Error saving message:", error);
    });
}

// adding user msg to chatbox
function addUserMessage(msg) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "chat flex align-center message";

  const img = document.createElement("img");
  img.src = "../assets/images/userIcon.png";

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
  img.src = "../assets/images/botlogo.png";

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
      messages: [
        {
          role: "system",
          content:
            "You are a helpful movie assistant. You can answer questions about movies, summarize their plots, and provide personalized movie recommendations based on user preferences. Please provide responses related to movies only and user about recommendations.",
        },
        {
          role: "user",
          content: userMsg,
        },
      ],
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
