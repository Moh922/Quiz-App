const highScoresList = document.getElementById('highScoreList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const clearHighScores = document.getElementById('clearhighscoreBtn');

highScoresList.innerHTML = highScores
 .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
   })
    .join("");

clearHighScores.addEventListener('click', (e) => {
    localStorage.removeItem('highScores');
    window.location.reload();
})