/**
 * Script principal para la experiencia interactiva de la tarjeta de San Valentín.
 * Gestiona el estado de la aplicación, las interacciones del usuario y los efectos visuales.
 *
 * @author Andres
 */
document.addEventListener('DOMContentLoaded', () => {

  // =================================================================
  // 1. SELECCIÓN DE ELEMENTOS DEL DOM
  // =================================================================

  const welcomeScreen = document.querySelector('[data-welcome-screen]');
  const startButton = document.querySelector('[data-start-button]');
  const audio = document.getElementById('myAudio');
  const musicToggleButton = document.querySelector('[data-music-toggle]');
  // ==================================================================
  // ▼▼▼ CAMBIO: Seleccionamos el <span> dentro del botón para el texto ▼▼▼
  const musicToggleButtonText = document.querySelector('[data-music-toggle] span');
  // ▲▲▲ CAMBIO ▲▲▲
  // ==================================================================
  const backButton = document.querySelector('[data-back-button]');
  const header = document.querySelector('[data-header]');
  const valentineCard = document.querySelector('[data-valentine-card]');
  const closedContent = document.querySelector('[data-closed-content]');
  const openContent = document.querySelector('[data-open-content]');
  const couponButton = document.querySelector('[data-coupon-button]');
  const couponModal = document.querySelector('[data-coupon-modal]');
  const closeModalButton = document.querySelector('[data-close-modal]');
  const heartsContainer = document.querySelector('[data-hearts-container]');
  const sparkleContainer = document.querySelector('[data-sparkle-container]');
  
  let isCardOpen = false;

  // === AJUSTE INICIAL: Ocultar contenido principal para el efecto de revelación ===
  header.style.transition = 'opacity 0.8s ease-in-out';
  valentineCard.style.transition = 'opacity 0.8s ease-in-out';
  header.classList.add('opacity-0');
  valentineCard.classList.add('opacity-0');


  // =================================================================
  // 2. FUNCIONES PRINCIPALES DE LA EXPERIENCIA
  // =================================================================

  function startExperience() {
    welcomeScreen.classList.add('opacity-0', 'pointer-events-none');
    
    setTimeout(() => {
      header.classList.remove('opacity-0');
      valentineCard.classList.remove('opacity-0');
    }, 300);

    if (audio.paused) {
      audio.play().catch(e => console.error("La reproducción de audio fue bloqueada por el navegador.", e));
      // CAMBIO: Modificamos el .innerText del <span>
      musicToggleButtonText.innerText = "Pausar";
    }
  }

  function openCard() {
    if (isCardOpen) return;
    isCardOpen = true;
    header.classList.add('hidden');
    closedContent.classList.add('hidden');
    valentineCard.classList.remove('closed', 'card-closed', 'cursor-pointer', 'opacity-0'); 
    valentineCard.classList.add('open', 'card-open');
    openContent.classList.remove('hidden');
    backButton.classList.remove('hidden');
  }

  function closeCard() {
    if (!isCardOpen) return;
    isCardOpen = false;
    openContent.classList.add('hidden');
    backButton.classList.add('hidden');
    valentineCard.classList.remove('open', 'card-open');
    valentineCard.classList.add('closed', 'card-closed', 'cursor-pointer');
    header.classList.remove('hidden');
    closedContent.classList.remove('hidden');
    audio.pause();
    audio.currentTime = 0;
    // CAMBIO: Modificamos el .innerText del <span>
    musicToggleButtonText.innerText = "Reproducir";
  }

  function toggleMusic() {
    if (audio.paused) {
      audio.play();
      // CAMBIO: Modificamos el .innerText del <span>
      musicToggleButtonText.innerText = "Pausar";
    } else {
      audio.pause();
      // CAMBIO: Modificamos el .innerText del <span>
      musicToggleButtonText.innerText = "Reproducir";
    }
  }
  
  function showCouponModal(event) {
    event.stopPropagation();
    if(couponModal) {
      couponModal.classList.remove('hidden');
      couponModal.classList.add('flex');
    }
  }

  function hideCouponModal() {
    if(couponModal) {
      couponModal.classList.add('hidden');
      couponModal.classList.remove('flex');
    }
  }

  // =================================================================
  // 3. GENERACIÓN DE EFECTOS VISUALES
  // =================================================================

  function createSparkles() {
    if (!sparkleContainer) { console.warn("Contenedor [data-sparkle-container] no encontrado."); return; }
    for (let i = 0; i < 30; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle fixed w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.8)] pointer-events-none animate-sparkle';
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.animationDuration = `${Math.random() * 2 + 1}s`;
      sparkle.style.animationDelay = `${Math.random() * 2}s`;
      sparkleContainer.appendChild(sparkle);
    }
  }

  function createFallingHearts() {
    if (!heartsContainer) { console.warn("Contenedor [data-hearts-container] no encontrado."); return; }
    for (let i = 0; i < 25; i++) {
      const heart = document.createElement('div');
      heart.className = 'absolute text-red-500 animate-fall text-shadow-[0_0_5px_rgba(255,255,255,0.8)]';
      heart.innerHTML = '❤';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
      heart.style.animationDelay = `${Math.random() * 2}s`;
      heart.style.fontSize = `${Math.random() * 20 + 10}px`;
      heartsContainer.appendChild(heart);
    }
  }

  function createCursorTrail() {
    let lastMove = 0;
    window.addEventListener('mousemove', (e) => {
      if (Date.now() - lastMove < 30) return;
      lastMove = Date.now();
      const trailParticle = document.createElement('div');
      trailParticle.className = 'fixed w-2 h-2 bg-white rounded-full shadow-[0_0_10px_3px_rgba(255,255,255,0.8)] pointer-events-none animate-trail-fade z-[15]';
      trailParticle.style.left = `${e.clientX}px`;
      trailParticle.style.top = `${e.clientY}px`;
      document.body.appendChild(trailParticle);
      setTimeout(() => {
        trailParticle.remove();
      }, 800);
    });
  }

  // =================================================================
  // 4. ASIGNACIÓN DE EVENTOS
  // =================================================================
  
  startButton.addEventListener('click', startExperience);
  valentineCard.addEventListener('click', () => { if (!isCardOpen) openCard(); });
  backButton.addEventListener('click', closeCard);
  musicToggleButton.addEventListener('click', toggleMusic);
  couponButton.addEventListener('click', showCouponModal);
  if (closeModalButton) {
    closeModalButton.addEventListener('click', hideCouponModal);
  }
  window.addEventListener('click', (event) => { if (event.target === couponModal) hideCouponModal(); });

  // =================================================================
  // 5. EJECUCIÓN INICIAL
  // =================================================================
  
  createSparkles();
  createFallingHearts();
  createCursorTrail();

});

