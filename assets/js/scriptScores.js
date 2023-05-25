var score1 = document.querySelector('#score1')
var score2 = document.querySelector('#score2')
var score3 = document.querySelector('#score3')
var score4 = document.querySelector('#score4')
var score5 = document.querySelector('#score5')
var clearScores = document.querySelector('#clearScores')

clearScores.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
  });

highscoreArray = JSON.parse(localStorage.getItem('highScores'));

console.log(highscoreArray);

score1.textContent = highscoreArray[0].nameNote + ':' + highscoreArray[0].timeNote;
score2.textContent = highscoreArray[1].nameNote + ':' + highscoreArray[1].timeNote;
score3.textContent = highscoreArray[2].nameNote + ':' + highscoreArray[2].timeNote;
score4.textContent = highscoreArray[3].nameNote + ':' + highscoreArray[3].timeNote;
score5.textContent = highscoreArray[4].nameNote + ':' + highscoreArray[4].timeNote;


  