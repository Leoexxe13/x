(() => {
  const audio = document.getElementById("audio");
  const button = document.getElementById("music-button");
  const status = document.getElementById("music-status");
  const modal = document.querySelector(".letter-modal");
  let started = false;
  let pending = false;

  // No esperar a que termine de descargar la canción para animar las flores.
  document.body.classList.remove("container");
  audio.volume = 0.85;

  function updateButton() {
    button.textContent = audio.paused ? "♫ Reproducir música" : "Ⅱ Pausar música";
    button.setAttribute("aria-pressed", String(!audio.paused));
  }

  async function startMusic() {
    if (pending) return;
    pending = true;
    status.textContent = "Cargando música…";
    try {
      if (audio.error) audio.load();
      // play debe ejecutarse directamente dentro del toque o clic.
      await audio.play();
      started = true;
      status.textContent = "";
    } catch (error) {
      status.textContent = error.name === "NotAllowedError"
        ? "Toca Reproducir música para escucharla."
        : "No se pudo cargar la música. Toca para reintentar.";
    } finally {
      pending = false;
      updateButton();
    }
  }

  button.addEventListener("click", () => {
    if (audio.paused) startMusic();
    else audio.pause();
  });
  audio.addEventListener("playing", () => {
    started = true;
    status.textContent = "";
    updateButton();
  });
  audio.addEventListener("pause", updateButton);
  audio.addEventListener("error", () => {
    status.textContent = "No se pudo cargar la música. Toca para reintentar.";
    updateButton();
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".music-controls")) return;
    if (!started) startMusic();
    if (event.target.closest(".letter-modal, .letter-button")) return;
    modal.classList.add("open");
  });
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.classList.remove("open");
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") modal.classList.remove("open");
  });
})();
