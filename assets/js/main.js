
let count = document.querySelector('#count');
let imgClown = document.querySelector('#imgClown');
let widthhmain = document.querySelector('main').offsetWidth;
let heigthmain = document.querySelector('main').offsetHeight;
let widthClown = imgClown.offsetWidth;
let difficulty = document.querySelector('#difficultyButton');
let isPlayable = true;
let repeat = null;
points = 0;
let player = document.querySelector('#audioPlayer');
let playerTwo = document.querySelector('audioPlayerTwo');

imgClown.addEventListener("mousedown", ()=>{
    target()
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function startGame(isReplayed) {
    if(isReplayed){
        isPlayable=true;
    } 
    let randomNumberX = getRandomInt(80);
    let randomNumberY = getRandomInt(80);
    imgClown.style.transform = `translate(${getRandomInt(widthhmain - widthClown)}px, ${getRandomInt(heigthmain - widthClown)}px )`;
    interval();
}

function target() {
    points = points + 1;
    count.innerHTML = "SCORE : " + points;
    fart();
}

let interval = ()=> { 
    if(repeat!==null){
        clearInterval(repeat)
    } 
        
    if (isPlayable) 
        repeat = setInterval(() => {
            startGame(false)
        }, 1000)
    else{
        clearInterval(repeat)
    }
}

function stopGame() {
    isPlayable = false;
}

function reset() {
    count.innerHTML = null;
    points = 0;
    imgClown.style.transform = "translate(0)";
}

function music() {
    if(player.paused == true) {
        player.play();
    }
    else {
        player.pause();
    }
}

function changeDifficulty() {
    if (difficulty.textContent == "DIFFICULTY : EASY") {
        difficulty.textContent = "DIFFICULTY : NORMAL";
        imgClown.style.transition = "linear, 0.5s";
    }
    else if (difficulty.textContent == "DIFFICULTY : NORMAL") {
        difficulty.textContent = "DIFFICULTY : HARD";
        imgClown.style.transition = "linear, 0.05s";
    }
    else {
        difficulty.textContent= "DIFFICULTY : EASY";
        imgClown.style.transition = "linear, 1s";
    }
}
console.log(difficulty.textContent);

function fart() {
    audioPlayerTwo.play();
}







