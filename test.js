
let count = document.querySelector('#count');
let imgClown = document.querySelector('#imgClown');
// let startButton = document.querySelector('#startButton');
// let quitButton = document.querySelector('#quitButton');
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
    if(isReplayed) isPlayable=true;
    let randomNumberX = getRandomInt(101);
    let randomNumberY = getRandomInt(101);
    imgClown.style.transform = `translate(${getRandomInt(widthhmain - widthClown)}px, ${getRandomInt(heigthmain - widthClown)}px )`;
    interval();
}

function target() {
    points = points + 1;
    count.innerHTML = "SCORE : " + points;
    fart();
}

let interval = ()=> { 
    if(repeat!==null) clearInterval(repeat)
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



// function changeDifficulty() {
//     if (difficulty.innerHTML == "DIFFICULTY : EASY") {
//         difficulty.innerHTML = "DIFFICULTY : NORMAL";
//     }
//     if (difficulty.innerHTML == "NORMAL") {
//         difficulty.innerHTML = "DIFFICULTY : HARD";
//     }
//     else {
//         difficulty.innerHTML= "DIFFICULTY : EASY";
//     }
// }
console.log(difficulty.innerHTML);

function fart() {
    audioPlayerTwo.play();
}







