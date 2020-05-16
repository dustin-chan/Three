let interval = setInterval(initPage, 10);

function initPage() {
  if (document.readyState === "complete") {
    window.scrollTo((11084/2) - (window.innerWidth/2), (13478/2) - (window.innerHeight/2));
    clearInterval(interval);
    randomizeVars();
  }
}

function randomizeVars() {
  let chat_1_delay = (Math.random() * 60) + 15
  let chat_1 = document.querySelector(".chat-1")
  chat_1.style.setProperty('--chat-1-animation-delay', chat_1_delay + 's')

  let chat_2_delay = (Math.random() * 60) + 45
  let chat_2 = document.querySelector(".chat-2")
  chat_2.style.setProperty('--chat-2-animation-delay', chat_2_delay + 's')

  let hair_1_delay = (Math.random() * 60) + 30
  let hair_1 = document.querySelector(".hair-1")
  hair_1.style.setProperty('--hair-1-animation-delay', hair_1_delay + 's')

  let hair_2_delay = (Math.random() * 60) + 90
  let hair_2 = document.querySelector(".hair-2")
  hair_2.style.setProperty('--hair-2-animation-delay', hair_2_delay + 's')

  let net_1_delay = (Math.random() * 60) + 60
  let net_1 = document.querySelector(".net-1")
  net_1.style.setProperty('--net-1-animation-delay', net_1_delay + 's')
}

// function session() {
//   if (document.cookie.indexOf("visited") >= 0) {
//     $('.splash').remove(this);
//   } else {
//     document.cookie = "visited";
//   }
// }