document.addEventListener("DOMContentLoaded", () => {
  const loadingMessages = [
    "Activando cámara de fotos y moliendo cafe de especialidad...",
    "Generando texturas de barritas de cereal...",
    "Afinando voz para cantar canciones cuya letra no me acuerdo...",
    "Activando recuerdos felices con el amor de mi vida..."
  ];

  let currentMessageIndex = 0;
  const loadingMessageElement = document.getElementById("loading-message");
  const mainContent = document.getElementById("main-content");
  const loadingScreen = document.getElementById("loading-screen");

  function showLoadingMessages() {
    if (currentMessageIndex < loadingMessages.length) {
      loadingMessageElement.textContent = loadingMessages[currentMessageIndex];
      currentMessageIndex++;
      setTimeout(showLoadingMessages, 2000);
    } else {
      loadingScreen.style.display = "none";
      mainContent.style.display = "block";
    }
  }

  showLoadingMessages();

  document.getElementById("availability-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const time = document.getElementById("time").value;
    alert(`Oki amor, nos vemos a las ${time}. 💕`);
    document.getElementById("riddle-section").classList.remove("hidden");
  });

  document.getElementById("submit-riddle").addEventListener("click", function () {
    const answer = parseInt(document.getElementById("riddle-answer").value, 10);
    const correctAnswer = 29 * 71 - 34;

    if (answer === correctAnswer) {
      document.getElementById("riddle-section").classList.add("hidden");
      document.getElementById("surprise-section").classList.remove("hidden");

      // Disparar confeti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      alert("Chill bro, vos podes");
    }
  });
});
