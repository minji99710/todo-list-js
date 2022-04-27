const clock = document.querySelector("h2#clock");
// interval : run a function every certain time
// timeout : run a function once after certain time

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const mins = String(date.getMinutes()).padStart(2, "0");

  clock.innerText = `${hours}:${mins}`;
}
getClock();
setInterval(getClock, 1000);
