//Declaring the variables
let homeScore = document.getElementById("home-score-btn-1")
let homeScore1 = document.getElementById("home-score-btn-2")
let homeScore2 = document.getElementById("home-score-btn-3")
let homeScore3 = document.getElementById("home-score-btn-4")
let guestScore = document.getElementById("guest-score-btn-1")
let guestScore1 = document.getElementById("guest-score-btn-2")
let guestScore2 = document.getElementById("guest-score-btn-3")
let guestScore3 = document.getElementById("guest-score-btn-4")
let scoreEl = document.getElementById("home-score")
let scoreEl1 = document.getElementById("guest-score")
let resetEl = document.querySelector("#reset-el")
let count = 0
let count1 = 0


// Home Score board
function increaseScoreBy1() {
    count += 1
   scoreEl.textContent = count
}

function increaseScoreBy2() {
    count += 2
    scoreEl.textContent = count
}

function increaseScoreBy3() {
    count += 3
    scoreEl.textContent = count
}

function decreaseScoreBy1(){
    count -= 1
    scoreEl.textContent = count
}

// Guest Score Board
function guestScoreBy1() {
    count1 += 1
   scoreEl1.textContent = count1
}

function guestScoreBy2() {
    count1 += 2
    scoreEl1.textContent = count1
}

function guestScoreBy3() {
    count1 += 3
    scoreEl1.textContent = count1
}

function decreaseGuestScoreBy1(){
    count1 -= 1
    scoreEl1.textContent = count1
}

//scoreboard reset function
resetEl.addEventListener("click", function(){
    let reset = 0
    scoreEl.textContent = reset
    scoreEl1.textContent = reset
})