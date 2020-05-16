
function scrollToMiddle() {
  if (document.readyState === "complete") {
    console.log("scrolling to middle of window");
    window.scrollTo((11084/2) - (window.innerWidth/2), (13478/2) - (window.innerHeight/2));
    clearInterval(interval);
  }
}
let interval = setInterval(scrollToMiddle, 100);
let chat_1_delay = (Math.random() * 60) + 15
let chat_1 = document.querySelector(".chat-1")
chat_1.style.setProperty('--chat-1-animation-delay', chat_1_delay + 's')