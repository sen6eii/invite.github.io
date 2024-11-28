// Mensajes del loading inicial
const loadingMessages = [
  "Activando partículas de pancho de Tristán Narvaja...",
  "Generando texturas de barritas de cereal...",
  "Afinando voz para cantar canciones cuya letra no sé...",
  "Activando recuerdos felices con el amor de mi vida..."
];

let currentMessageIndex = 0;

// Mostrar mensajes en el loading screen
const loadingMessageElement = document.getElementById("loading-message");
const mainContent = document.getElementById("main-content");
const loadingScreen = document.getElementById("loading-screen");

function showLoadingMessages() {
  if (currentMessageIndex < loadingMessages.length) {
    loadingMessageElement.textContent = loadingMessages[currentMessageIndex];
    currentMessageIndex++;
    setTimeout(showLoadingMessages, 2000); // Cambia el mensaje cada 2 segundos
  } else {
    // Ocultar el loading screen y mostrar el contenido principal
    loadingScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");
  }
}

// Iniciar el loading al cargar la página
window.onload = showLoadingMessages;

// Lógica para el formulario y la adivinanza
document.getElementById("availability-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const time = document.getElementById("time").value;
  if (time) {
    alert(`¡Gracias, amor! Nos veremos en la ${time === "morning" ? "mañana" : time === "afternoon" ? "tarde" : "noche"} 💕`);
    document.getElementById("riddle-section").classList.remove("hidden");
  }
});

document.getElementById("submit-riddle").addEventListener("click", function () {
  const answer = document.getElementById("riddle-answer").value.toLowerCase();
  if (answer === "mañana" || answer === "el futuro") {
    document.getElementById("riddle-section").classList.add("hidden");
    document.getElementById("surprise-section").classList.remove("hidden");
  } else {
    alert("¡Inténtalo de nuevo! Piensa en algo que siempre está por venir.");
  }
});
