let interval = setInterval(initPage, 10);
let loadingInterval;
let body;
let bodyInitialized = false;
let bodyLoaded = false;
let startTime = new Date();
let loadTime;

let delay_for_chat_1 = 5;
let delay_for_chat_2 = 17;
let delay_for_chat_3 = 32;
let delay_for_chat_4 = 47;
let delay_for_chat_5 = 62;
let delay_for_chat_6 = 77;
let delay_for_chat_7 = 92;
let delay_for_chat_8 = 107;
let delay_for_chat_9 = 122;
let delay_for_chat_10 = 137;
let delay_for_chat_11 = 152;
let delay_for_chat_12 = 167;
let delay_for_chat_13 = 182;
let delay_for_chat_14 = 197;
let delay_for_chat_15 = 212;
let delay_for_chat_16 = 227;
let delay_for_chat_17 = 242;
let delay_for_chat_18 = 257;
let delay_for_chat_19 = 272;
let delay_for_chat_20 = 287;
let delay_for_hair = 230;
let delay_for_zoom = 135;

function initPage() {
  console.log("initPage")
  if (bodyInitialized) {
    if (body.complete) {
      window.scrollTo(0, 0);
      clearInterval(interval);
      loadTime = (new Date() - startTime) / 1000;
      randomizeVars();
      bodyLoaded = true
    }
  }
}

function randomizeVars() {
  let chat_1_delay = (Math.random() * 10) + delay_for_chat_1 + loadTime + 30
  let chat_1 = document.querySelector(".chat-1")
  chat_1.style.setProperty('--chat-1-animation-delay', chat_1_delay + '3')

  let chat_2_delay = (Math.random() * 10) + delay_for_chat_2 + loadTime + 30
  let chat_2 = document.querySelector(".chat-2")
  chat_2.style.setProperty('--chat-2-animation-delay', chat_2_delay + 's')

  let chat_3_delay = (Math.random() * 10) + delay_for_chat_3 + loadTime + 30
  let chat_3 = document.querySelector(".chat-3")
  chat_3.style.setProperty('--chat-3-animation-delay', chat_3_delay + 's')

  let chat_4_delay = (Math.random() * 10) + delay_for_chat_4 + loadTime + 30
  let chat_4 = document.querySelector(".chat-4")
  chat_4.style.setProperty('--chat-4-animation-delay', chat_4_delay + 's')

  let chat_5_delay = (Math.random() * 10) + delay_for_chat_5 + loadTime + 30
  let chat_5 = document.querySelector(".chat-5")
  chat_5.style.setProperty('--chat-5-animation-delay', chat_5_delay + 's')

  let chat_6_delay = (Math.random() * 10) + delay_for_chat_6 + loadTime + 30
  let chat_6 = document.querySelector(".chat-6")
  chat_6.style.setProperty('--chat-6-animation-delay', chat_6_delay + 's')

  let chat_7_delay = (Math.random() * 10) + delay_for_chat_7 + loadTime + 30
  let chat_7 = document.querySelector(".chat-7")
  chat_7.style.setProperty('--chat-7-animation-delay', chat_7_delay + 's')

  let chat_8_delay = (Math.random() * 10) + delay_for_chat_8 + loadTime + 30
  let chat_8 = document.querySelector(".chat-8")
  chat_8.style.setProperty('--chat-8-animation-delay', chat_8_delay + 's')

  let chat_9_delay = (Math.random() * 10) + delay_for_chat_9 + loadTime + 30
  let chat_9 = document.querySelector(".chat-9")
  chat_9.style.setProperty('--chat-9-animation-delay', chat_9_delay + 's')

  let chat_10_delay = (Math.random() * 10) + delay_for_chat_10 + loadTime + 30
  let chat_10 = document.querySelector(".chat-10")
  chat_10.style.setProperty('--chat-10-animation-delay', chat_10_delay + 's')

  let chat_11_delay = (Math.random() * 10) + delay_for_chat_11 + loadTime + 30
  let chat_11 = document.querySelector(".chat-11")
  chat_11.style.setProperty('--chat-11-animation-delay', chat_11_delay + 's')

  let chat_12_delay = (Math.random() * 10) + delay_for_chat_12 + loadTime + 30
  let chat_12 = document.querySelector(".chat-12")
  chat_12.style.setProperty('--chat-12-animation-delay', chat_12_delay + 's')

  let chat_13_delay = (Math.random() * 10) + delay_for_chat_13 + loadTime + 30
  let chat_13 = document.querySelector(".chat-13")
  chat_13.style.setProperty('--chat-13-animation-delay', chat_13_delay + 's')

  let chat_14_delay = (Math.random() * 10) + delay_for_chat_14 + loadTime + 30
  let chat_14 = document.querySelector(".chat-14")
  chat_14.style.setProperty('--chat-14-animation-delay', chat_14_delay + 's')

  let chat_15_delay = (Math.random() * 10) + delay_for_chat_15 + loadTime + 30
  let chat_15 = document.querySelector(".chat-15")
  chat_15.style.setProperty('--chat-15-animation-delay', chat_15_delay + 's')

  let chat_16_delay = (Math.random() * 10) + delay_for_chat_16 + loadTime + 30
  let chat_16 = document.querySelector(".chat-16")
  chat_16.style.setProperty('--chat-16-animation-delay', chat_16_delay + 's')

  let chat_17_delay = (Math.random() * 10) + delay_for_chat_17 + loadTime + 30
  let chat_17 = document.querySelector(".chat-17")
  chat_17.style.setProperty('--chat-17-animation-delay', chat_17_delay + 's')

  let chat_18_delay = (Math.random() * 10) + delay_for_chat_18 + loadTime + 30
  let chat_18 = document.querySelector(".chat-18")
  chat_18.style.setProperty('--chat-18-animation-delay', chat_18_delay + 's')

  let chat_19_delay = (Math.random() * 10) + delay_for_chat_19 + loadTime + 30
  let chat_19 = document.querySelector(".chat-19")
  chat_19.style.setProperty('--chat-19-animation-delay', chat_19_delay + 's')

  let chat_20_delay = (Math.random() * 10) + delay_for_chat_20 + loadTime + 30
  let chat_20 = document.querySelector(".chat-20")
  chat_20.style.setProperty('--chat-20-animation-delay', chat_20_delay + 's')

  let hair_1_delay = delay_for_hair + loadTime
  let hair_1 = document.querySelector(".hair-1")
  hair_1.style.setProperty('--hair-1-animation-delay', hair_1_delay + 's')

  let zoom_delay = delay_for_zoom + loadTime
  let body = document.querySelector(".body")
  body.style.setProperty('--zoom-animation-delay', zoom_delay + 's')
}

function loadLoading() {
  console.log("loadLoading")
  body = document.querySelector(".body");
  let landing = document.querySelector(".landing")
  bodyInitialized = true;
  landing.parentNode.removeChild(landing);
  runAsync();
}

function runAsync() {
  setTimeout(checkLoaded, 10000);
}

function checkLoaded() {
  console.log("checkLoading")
  if (bodyLoaded) {
    let loading = document.querySelector(".loading")
    loading.parentNode.removeChild(loading);
  } else {
    loadingInterval = setInterval(clearLoading, 10);
  }
}

function clearLoading() {
  console.log("clearLoading")
  if (bodyLoaded) {
    let loading = document.querySelector(".loading")
    loading.parentNode.removeChild(loading);

    clearInterval(loadingInterval)
  }
}


// function session() {
//   if (document.cookie.indexOf("visited") >= 0) {
//     $('.splash').remove(this);
//   } else {
//     document.cookie = "visited";
//   }
// }
