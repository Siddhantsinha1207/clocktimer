const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function handleTimer() {
  const time = setInterval(function () {
    seconds.textContent = Number(seconds.textContent) - 1;
    hours.textContent = hours.textContent.padStart(2, 0);
    minutes.textContent = minutes.textContent.padStart(2, 0);
    seconds.textContent = seconds.textContent.padStart(2, 0);

    if (Number(seconds.textContent) === 0) clearInterval(time);
  }, 1000);
}

handleTimer();
