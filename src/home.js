import Isaw from './images/isaw.jpg';

const isaw = document.createElement('img');
isaw.src = Isaw;
isaw.setAttribute('width', '100%');
isaw.setAttribute('heigth', 'auto');

const dateTime = document.createElement('p');
dateTime.classList.add('date-time');
dateTime.textContent = 'Mon - Sun: 11am - 12am';

const content = document.querySelector('#content');

export function home() {
  content.appendChild(isaw);
  content.appendChild(dateTime);
}