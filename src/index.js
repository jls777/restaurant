import './css/styles.css';
import './css/home.css';
import {home} from './home.js';

const content = document.querySelector('#content');
const homeButton = document.querySelector('.home-button');

home();

homeButton.addEventListener('click', e => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  home();
})