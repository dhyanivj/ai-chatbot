var running = false;


var chatbot = document.getElementById("chatbot");
var chatbotToggle = document.getElementById("chatbot_toggle");
var toggleIcon = chatbotToggle.children[0];
var mainTitle = document.querySelector(".main-title");
var inputDiv = document.querySelector(".input-div");
var chatArea = document.querySelector(".chat-area");
var mainCard = document.querySelector(".main-card");

function setStyles(displaySettings, bgColor, cardBackground, boxShadow, toggleWidth) {
    [mainTitle, inputDiv, chatArea].forEach(el => el.style.display = displaySettings);
    toggleIcon.style.backgroundColor = bgColor;
    mainCard.style.background = cardBackground;
    mainCard.style.boxShadow = boxShadow;
    chatbotToggle.style.width = toggleWidth;
}

chatbotToggle.onclick = function() {
    if (chatbot.classList.contains("collapsed")) {
        chatbot.classList.remove("collapsed");
        toggleIcon.style.display = "none";
        setStyles("flex", "#ff000000", "white", "-8px -2px 39px 0px rgb(0 0 0 / 14%)", "60px");
    } else {
        chatbot.classList.add("collapsed");
        toggleIcon.style.display = "";
        setStyles("none", "#ff000000", "transparent", "none", "88px");
    }
};

// end of toggle 

function send() {
  // Show typing animation
  document.querySelector('.typing').style.display = 'block';

  // Hide typing animation after 2500ms
  setTimeout(function() {
      document.querySelector('.typing').style.display = 'none';
  }, 2500);

  if (running == true) return;

  // Add animation to the send button
  document.getElementById("send-button").classList.add("button-animation");
  setTimeout(function () {
    document.getElementById("send-button").classList.remove("button-animation");
  }, 1000);
}

