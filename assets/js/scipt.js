// on click of start quiz start timer for 75 seconds

var TimerEl = document.querySelector('#timer')
var startButton = document.querySelector('#startButton')
var questionEl = document.querySelector('#question')
var option1El = document.querySelector('#option1')
var option2El = document.querySelector('#option2')
var option3El = document.querySelector('#option3')
var option4El = document.querySelector('#option4')

var time = 75;
TimerEl.textContent = time
questionEl.textContent = 'Click Start Quiz'


var q1 = {
question: "What is Javascript?",
answers: [
  { answerText: "A book about Coffee", isCorrect: false },
  { answerText: "A coding Language", isCorrect: true },
  { answerText: "A speaking language", isCorrect: false },
  { answerText: "A waste of time", isCorrect: false }
]
};
console.log(q1.answers[0].answerText)

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      time--;
      TimerEl.textContent = time;
  
      if(timerSet === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

  function startQuiz() {
    questionEl.textContent = q1.question;
    option1El.textContent= q1.answers[0].answerText;
    option2El.textContent= q1.answers[1].answerText;
    option3El.textContent= q1.answers[2].answerText;
    option4El.textContent= q1.answers[3].answerText;

    option1El.addEventListener('click', function() {

    }
    )
  }


  startButton.addEventListener('click', function() {
    setTime();
    startQuiz();
  } 
  )




// write out all questions and their answers in an array item 0 being the question and 1-4 answer
// item 0 will be the OL item and the 4 answers will be the lis items

//on selection of an answer it will determine if that answer was correct or not
    // if correct quiz will move to next question, and display correct under quiz
    // if incorrect the quiz will deduct 10 seconds and display incorrect

// if the timer reaches 0 before the quiz is finished, it will bring you to a try again screen

// if the quiz is completed the score will be calculated based on the remaining time
     // high score form will be filled and stored in the high score list sorted by high to low score
     // play again button will restart quiz
     //clear high scores button will clear stored high scores