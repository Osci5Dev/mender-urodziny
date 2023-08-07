const countdown = () => {
  const countDate = new Date("August 17, 2023 11:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const textDays = Math.floor(gap / days);
  const textHours = Math.floor((gap % days) / hours);
  const textMinutes = Math.floor((gap % hours) / minutes);
  const textSeconds = Math.floor((gap % minutes) / seconds);

  const countdownElement = document.getElementById("countdown");
  const bottomLineElement = document.querySelector(".bottom-line");

  if (gap > 0) {
    countdownElement.innerHTML = `
      <div>${textDays}<span>Dni</span></div>
      <div>${textHours}<span>Godziny</span></div>
      <div>${textMinutes}<span>Minuty</span></div>
      <div>${textSeconds}<span>Sekundy</span></div>
    `;
    bottomLineElement.style.display = "block"; // Pokaż element
  } else {
    clearInterval(intervalId);
    countdownElement.innerHTML = `
      <p class="pausechamp">I PO CO TO ROBISZ</p>
      <img src="stare.png">`;
    bottomLineElement.style.display = "none"; // Ukryj element
  }
};

const intervalId = setInterval(countdown, 1000);