import './styles.css';

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');
let timerId = null;

console.log(body);

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const startClick = () => {
    timerId = setInterval(() => {
        btnStart.setAttribute("disabled", "disabled");
      body.setAttribute("style", `background-color:${colors[randomIntegerFromInterval(0,5)]};`);
    }, 1000);
  };

  const stopClick = () => {
    btnStart.removeAttribute("disabled");
    clearInterval(timerId);
  };
  
  btnStart.addEventListener('click', startClick);
  btnStop.addEventListener('click', stopClick);