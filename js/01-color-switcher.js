const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");

let interval;

btnStart.addEventListener("click", () => {
  btnStart.setAttribute("disabled", "disabled");
  btnStop.removeAttribute("disabled");
  document.body.style.background = getRandomHexColor();
  interval = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener("click", () => {
  btnStart.removeAttribute("disabled");
  btnStop.setAttribute("disabled", "disabled");
  clearInterval(interval);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
