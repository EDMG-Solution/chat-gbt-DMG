import bot from './assets/bot.svg';
import user from './assets/user.svg';

const from = document.querySelector('#from');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;
 
 function loader(element) {
 element.textContent = '';

 loadInterval = setInterval(() => { 
  element.textContent += '.';

  if (element.textContent.length ==='....') {
    element.textContent = '';
  }

 }, 3000);
}

function typeText(element, text) {
  let index = 0;
  let interval = setInterval(() => {
    if(index < text.length) {
      element.innerHTML += text.chartAt(index);
      index++;
    }else{
        clearInterval(interval);
    }
}, 20)
}

function generateUniqueID() {

  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = timestamp.toString(16);

  return `id-${hexadecimalString}-${randomNumber}`;
   } 

   function chatStripe (isAi , value , uniqueId){
   return (
      `<div class="wrapper ${isAi && 'ai' }">
      <div class="chat">

      <div class ="porfile"> 
      <img src="${isAi ? bot : user}" alt="${isAi ? 'bot' : 'user'}"/>
      
      </div>
      <div class="message" id=${uniqueId} >${value}</div>
      </div>
      </div>
      `

   )
 
   }