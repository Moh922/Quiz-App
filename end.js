const  username = document.getElementById('username');
const savedScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalscore');

const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORE = 70;


finalScore.innerText =  mostRecentScore;

username.addEventListener('keyup', () => {
    console.log(username.value);
    savedScoreBtn.disabled = !username.value;
});


savedHighScore = e =>{
    console.log('clicked the submit button');
    e.preventDefault();

  const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score)
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("./highscores.html");

};