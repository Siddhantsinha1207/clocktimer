const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const stopBtn = document.querySelector(".stop");
const startBtn = document.querySelector(".start");
const clearBtn = document.querySelector(".clear");

console.log(seconds.value);

startBtn.addEventListener("click", function () {
  startBtn.disabled = true;
  seconds.disabled = true;
  if (+seconds.value <= 0 && +minutes.value <= 0) return;
  if (seconds.value > 60) {
    minutes.value = Math.floor(seconds.value / 60);
    seconds.value = seconds.value % 60;
  }
  const timer = setInterval(function () {
    seconds.value = seconds.value - 1;
    hours.textContent = hours.textContent.padStart(2, 0);
    minutes.textContent = minutes.textContent.padStart(2, 0);
    seconds.value = seconds.value.padStart(2, 0);

    if (+minutes.value > 0 && +seconds.value === 0) {
      minutes.value = +minutes.value - 1;
      seconds.value = 60;
    }

    if (Number(seconds.value) === 0) {
      clearInterval(timer);
      startBtn.disabled = false;
      seconds.disabled = false;
    }
  }, 1000);
});

clearBtn.addEventListener("click", function () {
  seconds.value = seconds.value.padStart(2, 0);
  seconds.value = minutes.value.padStart(2, 0);
  seconds.value = hours.value.padStart(2, 0);
  return;
});
