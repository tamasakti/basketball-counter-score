let scoreHome = 0;
let scoreGuest = 0;
let showResultHome = document.getElementById("displayScoreHome");
let showResultGuest = document.getElementById("displayScoreGuest");
//Home Score Function
function addOneHome () {
    showResultHome.textContent = scoreHome += 1
}

function addTwoHome () {
    showResultHome.textContent = scoreHome += 2
}

function addThreeHome () {
    showResultHome.textContent = scoreHome += 3
}

//Guest Score Function
function addOneGuest () {
    showResultGuest.textContent = scoreGuest += 1
}

function addTwoGuest () {
    showResultGuest.textContent = scoreGuest += 2
}

function addThreeGuest () {
    showResultGuest.textContent = scoreGuest += 3
}

function resetHome () {
    showResultHome.textContent = 0;
    score = 0;
}

function resetGuest () {
    showResultGuest.textContent = 0;
    score = 0;
}

function highlight () {
    if (scoreHome > scoreGuest) {
        showResultHome.setAttribute("color:yellow");
    } else {
        showResultGuest.setAttribute("color:yellow");
    }   
}
