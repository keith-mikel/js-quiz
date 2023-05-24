// on click of start quiz start timer for 75 seconds

var TimerEl = document.querySelector('#timer')
var startButton = document.querySelector('#startButton')
var questionEl = document.querySelector('#question')
var option1El = document.querySelector('#option1')
var option2El = document.querySelector('#option2')
var option3El = document.querySelector('#option3')
var option4El = document.querySelector('#option4')
var answerButton = document.querySelector('.answerButton')
var solution = document.querySelector('#solution')

var time = 75;
TimerEl.textContent = time
questionEl.textContent = 'Click Start Quiz'


var quiz = {
  quizQuestions:[
  {
    question: "What is Javascript?",
    answers: [
      { answerText: "A book about Coffee", isCorrect: false },
      { answerText: "A coding Language", isCorrect: true },
      { answerText: "A speaking language", isCorrect: false },
      { answerText: "A waste of time", isCorrect: false }
    ]
  },
  {
    question: "What can querySelector be used for?",
    answers: [
      { answerText: "Select multiple elements that match a CSS selector.", isCorrect: false },
      { answerText: "Change the content of an HTML element.", isCorrect: false },
      { answerText: "Retrieve the value of a form input field.", isCorrect: false },
      { answerText: "Select the first element that matches a CSS selector.", isCorrect: true }
    ]
  },
  {
    question: "What is the purpose of the setTimeout function in JavaScript??",
    answers: [
      { answerText: "Execute a function repeatedly at a specified interval.", isCorrect: false },
      { answerText: "Stop the execution of a function.", isCorrect: false },
      { answerText: "Delay the execution of a function by a specified amount of time.", isCorrect: true },
      { answerText: "Bind a function to a specific event.", isCorrect: false }
    ]
  },
  {
    question: "What does the NaN value represent in JavaScript?",
    answers: [
      { answerText: "Not a Number' - indicating an invalid or unrepresentable numeric value.", isCorrect: true },
      { answerText: "'Not a Null' - indicating the absence of a null value.", isCorrect: false },
      { answerText: "'Not a Name' - indicating an undefined or missing variable name.", isCorrect: false },
      { answerText: "'Not an Object' - indicating a variable that does not refer to an object.", isCorrect: false }
    ]
  },
]
}
   

function startQuiz() {
  var Q = 0;

  function updateQuestion() {
    questionEl.textContent = quiz.quizQuestions[Q].question;

    option1El.textContent = quiz.quizQuestions[Q].answers[0].answerText;
    option1El.setAttribute('data-isCorrect', quiz.quizQuestions[Q].answers[0].isCorrect);

    option2El.textContent = quiz.quizQuestions[Q].answers[1].answerText;
    option2El.setAttribute('data-isCorrect', quiz.quizQuestions[Q].answers[1].isCorrect);

    option3El.textContent = quiz.quizQuestions[Q].answers[2].answerText;
    option3El.setAttribute('data-isCorrect', quiz.quizQuestions[Q].answers[2].isCorrect);

    option4El.textContent = quiz.quizQuestions[Q].answers[3].answerText;
    option4El.setAttribute('data-isCorrect', quiz.quizQuestions[Q].answers[3].isCorrect);
  }

  function onNextQuestion(event) {
    console.log(event.target.textContent)
    console.log(event.target.getAttribute('data-isCorrect'))
    if (event.target.getAttribute('data-isCorrect') == 'true') {
      solution.textContent = 'Correct!'
      
    } else {
      solution.textContent = 'Wrong!'
      time -= 10;
    }
    Q++;
    updateQuestion();
  }

  updateQuestion();

  answerButton.addEventListener('click', onNextQuestion);
}


  function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      time--;
      TimerEl.textContent = time;
  
      if(time === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
  };

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