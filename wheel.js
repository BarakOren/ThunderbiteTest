const wheel = document.getElementById("wheel")
const modal = document.getElementById("modal")
const TryAgain = document.getElementById("TryAgain")
const result = document.getElementById("result")
    
let character = {
    1: "The Orange One",
    2: "The Pink One",
    3: "The White One",
    4: "The Red One"
};

var num = 0

function getDeg(){
    // getDeg returns a random number between 0-90, 90-180, 180-270 and 270-360
    // depends on the position number we got.
    // but never gives us the the numbers of 360/90
    // so the wheel wont fall on the white lines between the characters.
    num = Math.floor(Math.random() * (5 - 1) + 1)
    if(num === 1){return Math.random() * (80 - 0) + 0}
    if(num === 2){return Math.random() * (160 - 80) + 80}
    if(num === 3){return Math.random() * (260 - 170) + 170}
    if(num === 4){return Math.random() * (350 - 260) + 260}
}

    button.addEventListener('click', () => {
        button.style.pointerEvents = "none";
        let spinTime = Math.floor(Math.random() * (8 - 4) + 4) //generate a random spin time.
        wheel.style.transition = `all ${spinTime}s ease-out`;
        wheel.style.transform =  `rotate(${getDeg() + 3600}deg)`;
        setTimeout(() => {
            modal.style.visibility = "visible";
            result.textContent = `You Won ${character[num]}`;
        }, spinTime * 1000 + 500)
    })

    TryAgain.addEventListener('click', () => {
        wheel.style.transform =  `rotate(0deg)`;
        modal.style.visibility = "hidden";
        wheel.style.transition = "all 1s ease";
    })

    wheel.addEventListener("transitionend", () => {
        wheel.style.transition = "none";
        button.style.pointerEvents = "auto"; 
    })

