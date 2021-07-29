import './style.css';
import { getGreenting1, getGreenting2 } from './src/greetings';

// HTMLで直書き、JavaScriptはmain.js
const button1 = document.getElementById('button1');
const label1 = document.getElementById('label1');
button1.addEventListener('click', () => {
  label1.innerHTML = getGreenting1();
});


// main.jsでinnnerHTMLで設定
document.querySelector('#app').innerHTML = `
  <h1>main.jsでinnnerHTMLで設定</h1>
  <button id="button2" class="styled" type="button">Say Hello</button>
  <label id="label2"></label>
`;

const button2 = document.getElementById('button2');
const label2 = document.getElementById('label2');

button2.addEventListener('click', () => {
  label2.innerHTML = getGreenting2();
});
