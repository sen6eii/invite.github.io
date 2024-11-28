// Mensajes del loading inicial
const loadingMessages = [
  "Activando partículas de pancho de Tristán Narvaja...",
  "Generando texturas de barritas de cereal...",
  "Afinando voz para cantar canciones cuya letra no sé...",
  "Activando recuerdos felices con el amor de mi vida..."
];

let currentMessageIndex = 0;

const loadingMessageElement = document.getElementById("loading-message");
const mainContent = document.getElementById("main-content");
const loadingScreen = document.getElementById("loading-screen");

// Función para mostrar los mensajes de loading
function showLoadingMessages() {
  if (currentMessageIndex < loadingMessages.length) {
    loadingMessageElement.textContent = loadingMessages[currentMessageIndex];
    currentMessageIndex++;
    setTimeout(showLoadingMessages, 2000); // Cambia el mensaje cada 2 segundos
  } else {
    // Termina el loading y muestra el contenido principal
    loadingScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");
  }
}

// Iniciar el loading al cargar la página
window.onload = showLoadingMessages;

// Lógica del formulario y la adivinanza
document.getElementById("availability-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const time = document.getElementById("time").value;
  if (time) {
    alert(`¡Gracias, amor! Nos veremos en la ${time === "morning" ? "mañana" : time === "afternoon" ? "tarde" : "noche"} 💕`);
    document.getElementById("riddle-section").classList.remove("hidden");
  }
});

document.getElementById("submit-riddle").addEventListener("click", function () {
  const answer = parseInt(document.getElementById("riddle-answer").value, 10);
  const correctAnswer = 29 * 71 - 34; // Cálculo esperado

  if (answer === correctAnswer) {
    document.getElementById("riddle-section").classList.add("hidden");
    document.getElementById("surprise-section").classList.remove("hidden");
  } else {
    alert("¡Inténtalo de nuevo! Pista: realiza el cálculo con calma.");
  }
});
