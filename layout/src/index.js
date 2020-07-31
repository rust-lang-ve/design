import './style/main.scss';
const template = require('./markup/index.hbs');

document.addEventListener("DOMContentLoaded", function() {
  const divEl = document.createElement('div');
  divEl.innerHTML = template();
  document.body.appendChild(div);
});
