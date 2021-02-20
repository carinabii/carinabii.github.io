var pomodoro = {
    running : false,
    minutes : 00,
    seconds : 00,
    interval : null, 

    currMin : null,
    currSec: null,
}

var x = document.getElementById("myAudio"); 
var isPlaying = false;
var i = 0;

function playAudio() { 
    if (isPlaying && i != 1){
        return;
    } else{
        x.play(); 
        isPlaying = true;
        // i++;
    }

} 

function pauseAudio() { 
    if (!isPlaying){
        return;

    } else{
        isPlaying = false;
        x.pause(); 
        this.x.currentTime = 0;
        x.onpause();
        return;
    }
    // if (isPlaying == true){
    //     x.pause(); 
    //     this.x.currentTime = 0;
    //     x.onpause();
    //     isPlaying = false;
    // } else{
    //     isPlaying = false;
    //     return;
    // }

  
} 



function init(){
    this.currMin = document.getElementById("minutes");
    this.currSec = document.getElementById("seconds");

}

// Study Button Function:
document.getElementById("studyButton").onclick = function() {studyTime()};

function studyTime(){
    // alert("study");
    i++;
    // setTime(25, 0, true);
    setTime(0, 3, true);
}

// Short Break Button Function:
document.getElementById("shortBreakButton").onclick = function() {shortBreakTime()};

function shortBreakTime(){
    // alert("short break");
    i++;
    setTime(5, 0, true);
    // setTime(0, 5, true);

}

// Long Button Function:
document.getElementById("longBreakButton").onclick = function() {longBreakTime()};

function longBreakTime(){
    // alert("long break");
    // resetTimer();
    // endStudy();
    i++;
    setTime(15, 0, true);
}


// End Button Function:
document.getElementById("endButton").onclick = function() {endStudy()};

function endStudy(){
    // alert("end");
    
    setTime(0, 0, false);
    // i++;
    // while (i < 2){

    // }
    pauseAudio();
    
}


function setTime(min, sec, running){
    this.minutes = min;
    if(min<10){
        document.getElementById("minutes").innerHTML = "0" + parseInt(min, 10);
    } else {
        document.getElementById("minutes").innerHTML = min;
    }
    this.seconds = sec;
    if(sec<10){
        document.getElementById("seconds").innerHTML = "0" + parseInt(sec, 10);
    } else {
        document.getElementById("seconds").innerHTML = sec;
    }
    
    this.running = running;
    this.fillerIncrement = 200/(this.minutes*60)
    incrementTime();
}


function updateTime(){
    if(this.minutes<10){
        document.getElementById("minutes").innerHTML = "0" + parseInt(this.minutes, 10);
    } else {
        document.getElementById("minutes").innerHTML = this.minutes;
    }
    
    
    if(this.seconds<10){
        document.getElementById("seconds").innerHTML = "0" + parseInt(this.seconds, 10);
    } else {
        document.getElementById("seconds").innerHTML = this.seconds;
    }
    setTimeout(incrementTime, 1000);
    

}

function incrementTime(){

    if (this.running = false){
        return;
    }
    if (this.seconds == 0 && this.minutes == 0) {
        this.running = false;
        // if (!isPlaying){
        //     playAudio();
        // }
        // while(isPlaying){

        // }
        // i++;
        if (i==1){
            playAudio();
            i--;
        }
        
        
        return;
    }
    if (this.seconds==0 && this.minutes != 0){
        this.minutes--;
        this.seconds=59;
    } else {
        this.seconds--;
    }


    this.updateTime();

}

function resetTimer(){
    minutes==0;
    seconds==0;
    document.getElementById("minutes").innerHTML = "0" + parseInt(this.minutes, 10);
    document.getElementById("seconds").innerHTML = "0" + parseInt(this.seconds, 10);
    incrementTime();
}

// window.onload = function() {pomodoro.init()};




