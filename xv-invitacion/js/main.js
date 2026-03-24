AOS.init({
  duration: 1000,
  once: true
});

// =========================
// CUENTA REGRESIVA
// =========================
const targetDate = new Date("December 12, 2026 21:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// =========================
// AUDIO
// =========================
const musicBtn = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

musicBtn.addEventListener("click", async () => {
  try {
    if (!isPlaying) {
      await bgMusic.play();
      isPlaying = true;
      musicBtn.classList.add("playing");
      musicBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
    } else {
      bgMusic.pause();
      isPlaying = false;
      musicBtn.classList.remove("playing");
      musicBtn.innerHTML = '<i class="bi bi-music-note-beamed"></i>';
    }
  } catch (error) {
    console.error("No se pudo reproducir el audio:", error);
  }
});

// =========================
// PARTICULAS / BRILLOS
// =========================
const sparklesContainer = document.getElementById("sparkles");

function createSparkle() {
  const sparkle = document.createElement("span");
  sparkle.classList.add("sparkle");

  const size = Math.random() * 8 + 4;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.animationDuration = `${Math.random() * 5 + 5}s`;
  sparkle.style.opacity = Math.random().toFixed(2);

  sparklesContainer.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 10000);
}

setInterval(createSparkle, 260);

// =========================
// EFECTO APARECER SUAVE AL SCROLL EN HERO BUTTON
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});