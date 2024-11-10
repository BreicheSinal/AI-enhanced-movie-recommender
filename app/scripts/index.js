const botBttn = document.getElementById("botBttn");

botBttn.addEventListener("click", function () {
  const chatbox = document.getElementById("chatbox");
  console.log("im here");
  chatbox.style.display =
    chatbox.style.display === "none" || chatbox.style.display === ""
      ? "block"
      : "none";
});
