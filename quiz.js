const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById('scores');
const timeCount = document.getElementById('timer-sec');
const startBtn = document.getElementById('startBtn');
const s = document.getElementById('sec');


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
startTimer(30);
let availableQuestions = [];

let questions = [
    {
        question: "Inside which HTML element do we get the 'Javascript'??",
        choice1: "<scripts>",
        choice2: "<javaScript>",
        choice3: "<js>",
        choice4: "<script>",
        answer: 4
    },
    {
        question: "Commonly used data type DO NOT INCLUDE?",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alert",
        choice4: "numbers",
        answer: 3
    },
    {
        question: "Which is the correct ways of declaring a CSS property?",
        choice1: "background::",
        choice2: "bacground:;",
        choice3: "backgroung-;",
        choice4: "background;:",
        answer: 2
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4
    },
   {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    choice1: "commas",
    choice2: "curly bracket",
    choice3: "quotes",
    choice4: "parentheses",
    answer: 3
  },
  {
      question:    "A very useful tool used during development and debugging for printing content to the debugger is:",
      choice1: "JavaScript",
      choice2: "terminal",
      choice3: "for loops",
      choice4: "console.log",
      answer: 4
  },
  {
    question: "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    choice1: "break", 
    choice2: "stop", 
    choice3: "halt", 
    choice4: "exit",
    answer: 1
  },
];

//CONSTATNTS
const CORREECT_BONUS = 10;
const MAX_QUESTIONS = 7;



startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign('./end.html');
    }
    questionCounter++;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice  => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

};

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
    
      if(time < 0 ){
        clearInterval(counter);
      };
      if (time < 0){
        timeCount.textContent = 'Time up';
        return window.location.assign('./end.html');
      };
    };
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;


        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct'){
            incrementScore(CORREECT_BONUS);
        } else{
            decrementScore(CORREECT_BONUS);
        } 

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

decrementScore = num => {
    score -= num;
    scoreText.innerText = score
};
decrementTime = num => {
    time -= num;
    timeCount.textContent = time;
}
startGame();
