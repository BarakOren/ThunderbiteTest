const wheelDiv = document.getElementById("wheelDiv")
const wheel = document.getElementById("wheel")
const modal = document.getElementById("modal")
const TryAgain = document.getElementById("TryAgain")
const result = document.getElementById("result")
    
window.addEventListener('load', () => {
    setTimeout(() => {
        wheelDiv.style.opacity = 1;
    }, 2000)
});

const url = "./data.json";


let counter = 0
button.addEventListener('click', () => {
    button.style.pointerEvents = "none";
    fetch(url)
    .then((res) => res.json())
    .then(data => {
            var random = Math.floor(Math.random() * (4 - 0) + 0)
            spin(data.POSITION[random])
    })
})

TryAgain.addEventListener('click', () => {
    // wheel.style.transform =  `rotate(0deg)`;
    modal.style.visibility = "hidden";
    // wheel.style.transition = "all 1s ease";
})

wheel.addEventListener("transitionend", () => {
    wheel.style.transition = "none";
})

function spin(outcome){
    let spinDeg;
    let winner;
    counter = counter + 3600
    // returns a random number between 0-90, 90-180, 180-270 and 270-360
    // depends on the position number we got.
    // but never gives us the the numbers of 360 devides 90
    // so the wheel wont fall on the white lines between the characters.
    if(outcome === 1){spinDeg = Math.random() * (80 - 10) + 10; winner = "The Orange One"}
    if(outcome === 2){spinDeg = Math.random() * (160 - 10) + 100; winner = "The Pink One"}
    if(outcome === 3){spinDeg = Math.random() * (260 - 190) + 190; winner = "The White One"}
    if(outcome === 4){spinDeg = Math.random() * (350 - 280) + 280; winner = "The Red One"}
    // counter will add 10 more spins each click.
    // 360 to reset the rotation position to 0 so we can start the new roll from 0
    // spinDeg is the new rotation degrees for the next winner
    let spinTime = Math.floor(Math.random() * (8 - 4) + 4) 
    //spinTime generate a random spinning time.
    wheel.style.transition = `all ${spinTime}s`;
    wheel.style.transform =  `rotate(${360 + counter + spinDeg}deg)`;  

    setTimeout(() => {
        result.textContent = `You Won ${winner}`;
        modal.style.visibility = "visible";
        button.style.pointerEvents = "auto";
    }, spinTime * 1000 + 500)
    }


