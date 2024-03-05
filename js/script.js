const pente = document.querySelector('.pente');
const careca = document.querySelector('.careca');
audioStart = new Audio('./audio/pulo.mp3');
audioGameOver = new Audio('./audio/risada.mp3');


const jump = () => {
    pente.classList.add('jump')
    setTimeout(() => {

        pente.classList.remove('jump');
        
    }, 500);
    audioStart.play();
}


const loop = setInterval(() => {

    console.log('loop')
    
    const carecaPosition = careca.offsetLeft;
    const pentePosition = +window.getComputedStyle(pente).bottom.replace('px', '');

    if (carecaPosition <= 80 && carecaPosition > 0 && pentePosition < 80) {

        careca.style.animation = 'none';
        careca.style.left = `${carecaPosition}px`;

        pente.style.animation = 'none';
        pente.style.left = `${pentePosition}px`;

        pente.src = './images/gameoverhaha.png';
        pente.style.bottom = '36px'
        pente.style.width = '500px'
        pente.style.left = '450px'
        audioGameOver.play();

        clearInterval(loop);
    }

}, 10);



document.addEventListener('keydown', jump);