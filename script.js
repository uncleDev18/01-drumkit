
function removeTransition(e) 
{
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) 
{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function clap()
{
    const audio = document.querySelector("#clap-el");
    const key = document.querySelector(".clap-El");

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function hithat()
{
    const audio = document.querySelector("#hithat-el");
    const key = document.querySelector(".hithat-El");

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}


function kick()
{
    const audio = document.querySelector("#kick-el");
    const key = document.querySelector(".kick-El");

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function openhat()
{
    const audio = document.querySelector("#openhat-el");
    const key = document.querySelector(".openhat-El");

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function boom()
{
    const audio = document.querySelector("#boom-el");
    const key = document.querySelector(".boom-El");

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function ride()
{
    const audio = document.querySelector("#ride-el");
    const key = document.querySelector(".ride-El");

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function snare()
{
    const audio = document.querySelector("#snare-el");
    const key = document.querySelector(".snare-El");

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function tom()
{
    const audio = document.querySelector("#tom-el");
    const key = document.querySelector(".tom-El");

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function tink()
{
    const audio = document.querySelector("#tink-el");
    const key = document.querySelector(".tink-El");

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);