const content = document.querySelector('#content');

const divConstruction = document.createElement('div');
divConstruction.classList.add('construction');

const pconstruction = document.createElement('p');
pconstruction.textContent = 'Under Construction';

divConstruction.appendChild(pconstruction);

export function tab() {
  content.appendChild(divConstruction);
}