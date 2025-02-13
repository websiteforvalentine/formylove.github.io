document.addEventListener("DOMContentLoaded", () => {
  // Background Music Toggle
  const musicToggle = document.getElementById("music-toggle");
  const backgroundMusic = document.getElementById("background-music");

  musicToggle.addEventListener("click", () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      musicToggle.textContent = "🔊";
    } else {
      backgroundMusic.pause();
      musicToggle.textContent = "🎵";
    }
  });

  // Sparkling Hearts
  const sparklesContainer = document.getElementById("sparkles");

  function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.textContent = "💖";
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";
    sparklesContainer.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 3000);
  }

  setInterval(createSparkle, 500);

  // Ensure the parent container is relative
  const proposalContainer = document.querySelector('.proposal-container');
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');

  // Set proposal container's position to relative
  proposalContainer.style.position = "relative";

  // Playful No Button Movement (Moves Within the Box)
  noButton.addEventListener("mouseover", () => {
    const containerRect = proposalContainer.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    // Calculate max positions inside the container
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    // Generate random positions inside the container
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    // Apply new position within bounds
    noButton.style.position = "absolute";
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
    noButton.style.transition = "left 0.3s ease, top 0.3s ease";
  });

  // Celebratory Pop-Up
  const celebratePopup = document.getElementById("celebrate-popup");
  const closePopup = document.getElementById("closePopup");

  yesButton.addEventListener("click", () => {
    celebratePopup.style.display = "flex";
  });

  closePopup.addEventListener("click", () => {
    celebratePopup.style.display = "none";
  });

  // Heart Collector Game
  const gameContainer = document.getElementById("game-container");
  const heartCounter = document.getElementById("heart-counter");
  const timer = document.getElementById("timer");
  let count = 0;
  let timeLeft = 30;

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * (gameContainer.offsetWidth - 30) + "px";
    heart.style.top = Math.random() * (gameContainer.offsetHeight - 30) + "px";
    gameContainer.appendChild(heart);

    heart.addEventListener("click", () => {
      count++;
      heartCounter.textContent = count;
      heart.remove();
    });

    setTimeout(() => {
      heart.remove();
    }, 3000); // Hearts disappear after 3 seconds
  }

  setInterval(createHeart, 1000); // Create a new heart every second

  function updateTimer() {
    timeLeft--;
    timer.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      alert(`Time's up! You collected ${count} hearts!`);
    }
  }

  const timerInterval = setInterval(updateTimer, 1000);

  // Loading Animation
  const loading = document.getElementById("loading");
  setTimeout(() => {
    loading.style.display = "none";
  }, 2000);
});
