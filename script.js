//creating timer variables
var timeCount = document.getElementById('timer_sec');
var startBtn = document.getElementById('startBtn');
var s = document.getElementById('sec');


var startTimer = null;

function timer(){
    s.value++;
}

startBtn.addEventListener('click', () => {
    //initilaiize the variable startTimer
    function startInterval() {
    startTimer = setInterval(() => {
        timer();
    }, 1000);        
    }
    startInterval();
})