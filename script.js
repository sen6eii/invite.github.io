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
