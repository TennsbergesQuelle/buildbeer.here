const prostBtn = document.getElementById('prost-btn');
const toastMessage = document.getElementById('toast-message');
const ploppSound = new Audio('medien/plopp.mp3');
const songPlBt = document.querySelector('.songPlBt');
const songBottle = new Audio('medien/flascherl.mp3');
const closeSecBtn = document.querySelector('.closeSec');
const animationUnderscore = document.querySelector('.animation_wrapper');
const animationHyphen = document.querySelector('.animation-wrapper');
const animationSec = document.querySelector('.animation-section');
const baubiertitel = document.querySelector('.baubiertitel');
const beerstage = document.querySelector('.beerstage');
const imageModal = document.getElementById('imageModal');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

let anstossZaehler = 0;
let toastTimeoutId = null;
let bauTimeoutId = null;
let bauVar = 0;

if (prostBtn) {
  prostBtn.addEventListener('click', () => {
    ploppSound.currentTime = 0;
    ploppSound.play();
    anstossZaehler++;
    if (toastMessage) {
      toastMessage.innerText = `Du hast heute schon ${anstossZaehler} mal angestoßen!`;
      toastMessage.classList.add('show');
      clearTimeout(toastTimeoutId);
      toastTimeoutId = setTimeout(() => {
        toastMessage.classList.remove('show');
      }, 1000);
    }
  });
}

if (songPlBt) {
  songPlBt.addEventListener('click', () => {
    if (!songBottle.paused) {
      songBottle.pause();
    } else {
      songBottle.currentTime = 0;
      songBottle.play();
      songPlBt.classList.add('active');
    }
  });

  songBottle.addEventListener('pause', () => {
    songPlBt.classList.remove('active');
  });
}

if (baubiertitel) {
  baubiertitel.addEventListener('click', () => {
    bauVar += 1;
    if (bauVar === 5) {
      bauTimeoutId = setTimeout(() => { bauVar = 0; }, 5000);
      if (animationHyphen) animationHyphen.classList.remove('hidden');
      if (animationUnderscore) animationUnderscore.classList.remove('hidden');
      if (animationSec) animationSec.classList.remove('hidden');
      if (closeSecBtn) closeSecBtn.classList.remove('hidden');
    }
  });
}

if (closeSecBtn) {
  closeSecBtn.addEventListener('click', () => {
    if (animationHyphen) animationHyphen.classList.add('hidden');
    if (animationUnderscore) animationUnderscore.classList.add('hidden');
    if (animationSec) animationSec.classList.add('hidden');
    closeSecBtn.classList.add('hidden');
  });
}

if (beerstage) {
  beerstage.addEventListener('click', () => {
    if (imageModal) {
      imageModal.classList.remove('hidden');
      beerstage.classList.add('active');
    }
  });
}

function closeModal() {
  if (imageModal) {
    imageModal.classList.add('hidden');
    if (beerstage) beerstage.classList.remove('active');
  }
}

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', closeModal);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && imageModal && !imageModal.classList.contains('hidden')) {
    closeModal();
  }
});

document.addEventListener('play', function(e) {
  if (e.target && (e.target.tagName === 'AUDIO' || e.target.tagName === 'VIDEO')) {
    const allMedia = document.querySelectorAll('audio, video');
    allMedia.forEach(function(media) {
      if (media !== e.target) {
        media.pause();
      }
    });
  }
}, true);
