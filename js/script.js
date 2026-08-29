const prostBtn = document.getElementById('prost-btn');
const toastMessage = document.getElementById('toast-message');
const ploppSound = new Audio('medien/plopp.mp3');
const songPlBt = document.getElementsByClassName('songPlBt');
const songBottle = new Audio('medien/flascherl.mp3');

let anstossZaehler = 0;
let timeoutId = null;

prostBtn.addEventListener('click', () => {
    ploppSound.currentTime = 0;
    ploppSound.play();

    anstossZaehler++;
    toastMessage.innerText = `Du hast heute schon ${anstossZaehler} mal angestoßen!`;
    toastMessage.classList.add('show');
    
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
        toastMessage.classList.remove('show');
    }, 1000);
});

songPlBt[0].addEventListener('click', () => {
    if (songBottle.paused === false) {
    songBottle.pause();}
    else {
        songBottle.currentTime = 0;
    songBottle.play();
    songPlBt[0].classList.add('active');
    }
 });       

songBottle.addEventListener('pause', () => {
    songPlBt[0].classList.remove('active');
});

const closeSecBtn = document.getElementsByClassName('closeSec');
const animation = document.getElementsByClassName('animation_wrapper');
const animationen = document.getElementsByClassName('animation-wrapper');
const animationSec = document.getElementsByClassName('animation-section');
const baubiertitel = document.getElementsByClassName('baubiertitel')[0];
let bauVar = 0;

baubiertitel.addEventListener('click', () => {
    bauVar += 1;
    if (bauVar === 5) {
         timeoutId = setTimeout(() => {bauVar = 0}, 5000);
        animationen[0].classList.remove('hidden')
        animation[0].classList.remove('hidden')
        animationSec[0].classList.remove('hidden')
        closeSecBtn[0].classList.remove('hidden')
        };
})

closeSecBtn[0].addEventListener('click', () => {
    animationen[0].classList.add('hidden')
    animation[0].classList.add('hidden')
    animationSec[0].classList.add('hidden')
    closeSecBtn[0].classList.add('hidden')
})