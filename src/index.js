import './css/styles.css';
import './css/home.css';
import './css/tab.css';
import {home} from './home.js';
import {tab} from './tab.js';

const content = document.querySelector('#content');
const homeButton = document.querySelector('.home-button');
const tabButton = document.querySelector('.header-button');

home();

homeButton.addEventListener('click', e => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  home();
})

tabButton.addEventListener('click', e => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  tab();
})