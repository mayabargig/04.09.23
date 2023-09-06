// ---1---
container.innerHTML += `<h1 id="myH1">you wellcome!</h1>`
function printAlert (){
    alert("wellcome!")
}
// document.getElementById("myH1").addEventListener("mouseover", printAlert);

// ----2---
container2.innerHTML += `<div id="myDiv"> maya </div>`
function printHoursToLog (){
    var myDate = new Date; 
    console.log(myDate.getHours() + ":" + myDate.getMinutes());
}
// document.getElementById("myDiv").addEventListener("mouseover", printHoursToLog);

// ---setTimeOut---
// ---1---
function printMyName (){
    container.innerHTML += `<p> Maya Bargig </p>`
}

// setTimeout(printMyName, 7000);

// ---2---
function printHello (){
    container.innerHTML += `<p> Hello </p>`
}

// setTimeout(printHello, 5000);
container.innerHTML += `<p> Bye </p>`

// ---3---
function printHours (){
    var currentDate = new Date;
    container.innerHTML += `<p>${currentDate.getHours() + ":" + currentDate.getMinutes()}  </p>`
}

// setTimeout(printHours, 90000)

// --4--
function printILoveTimer (){
    container.innerHTML += `<p>i love timmer</p>`
}

var result = setTimeout(printILoveTimer, 3000);

function canclePrintILoveTimer(){
    clearTimeout(result)
}

container.innerHTML += `<button id="myBtn"> cancle </button>`
document.getElementById("myBtn").addEventListener("click", canclePrintILoveTimer);

// ---5---
container2.innerHTML += `<h2 id="myH2" style="color:blue">hello</h2>`
function returnColor (){
    document.getElementById("myH2").style = "color:red"
}

setTimeout(returnColor, 3000);

// --setInterval--
// --1---
function printTimer (){
    container2.innerHTML += `<p id="myTimer"> timer </p>`
}

// setInterval(printTimer, 4000)

// ---2--
var counter = 0;
function printCounter (){
    container2.innerHTML = counter++
}

// setInterval(printCounter, 1000)

// ---3---
function printILoveTimer2 (){
    container2.innerHTML += `
    <p> i love timmer </p>`
}
var printValue = setTimeout(printILoveTimer2, 5000);


function cancelPrintILoveTimer2 (){
    clearTimeout(printValue)
}

container2.innerHTML += `<button id="deleteBtn"> delete</button>`;
document.getElementById("deleteBtn").addEventListener("click", cancelPrintILoveTimer2);

// ---4---
function getCurrentTime (){
    var currentDate = new Date;
    container2.innerHTML += `<p> ${currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()}</p>`
}

// setInterval(getCurrentTime, 1000)

// ---5---
var timerElement = document.getElementById("timer");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var minutesInput = document.getElementById("minutes");

var timer;
var secondsLeft = 0;

function updateTimer() {
    var minutes = Math.floor(secondsLeft / 60);
    var seconds = secondsLeft % 60;

    var displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    var displaySeconds = seconds < 10 ? "0" + seconds : seconds;

    timerElement.textContent = displayMinutes + ":" + displaySeconds;
    secondsLeft--;

    if (secondsLeft < 0) {
        clearInterval(timer);
        timerElement.textContent = "time out!";
    }
}

startButton.addEventListener("click", function() {
    if (!timer) {
        secondsLeft = minutesInput.value * 60; 
        updateTimer();
        timer = setInterval(updateTimer, 1000);
    }
});

stopButton.addEventListener("click", function() {
    clearInterval(timer);
    timer = null;
});

// ---6--
var alarmTimeInput = document.getElementById("alarmTime");
var toggleAlarmButton = document.getElementById("toggleAlarm");
var timeLeftElement = document.getElementById("timeLeft");

var alarmInterval;
var alarmTime;
var alarmActive = false;

function updateTimeLeft() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var currentTimeInMinutes = hours * 60 + minutes;
    var alarmTimeInMinutes = parseInt(alarmTime.split(":")[0]) * 60 + parseInt(alarmTime.split(":")[1]);

    var timeDifference = alarmTimeInMinutes - currentTimeInMinutes;
    if (timeDifference <= 0) {
        clearInterval(alarmInterval);
        alarmActive = false;
        timeLeftElement.textContent = "time is arrive!";
    } else {
        var hoursLeft = Math.floor(timeDifference / 60);
        var minutesLeft = timeDifference % 60;
        timeLeftElement.textContent = "time left: " + hoursLeft + " hours and " + minutesLeft + " minutes";
    }
}

toggleAlarmButton.addEventListener("click", function() {
    if (!alarmActive) {
        alarmTime = alarmTimeInput.value;
        updateTimeLeft();
        alarmInterval = setInterval(updateTimeLeft, 1000);
        alarmActive = true;
        toggleAlarmButton.textContent = "stop alarm";
    } else {
        clearInterval(alarmInterval);
        alarmActive = false;
        toggleAlarmButton.textContent = "start alarm";
        timeLeftElement.textContent = "";
    }
});





