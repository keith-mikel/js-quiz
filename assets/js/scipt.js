// on click of start quiz start timer for 75 seconds

var TimerEl = document.querySelector('#timer')
var startButton = document.querySelector('#startButton')
var questionEl = document.querySelector('#question')
var option1El = document.querySelector('#option1')
var option2El = document.querySelector('#option2')
var option3El = document.querySelector('#option3')
var option4El = document.querySelector('#option4')
var answerButtons = document.querySelectorAll('.answerButton');
var solution = document.querySelector('#solution')
var submitForm = document.querySelector('.scoreSubmit')
var submitButton = document.querySelector('.submitButton')


//set starting parameters
var highScores = []
var time = 75;
var Timer;
TimerEl.textContent = time;
questionEl.textContent = 'Click Start Quiz'

//quiz questions
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
      { answerText: "'Not a Number' - indicating an invalid or unrepresentable numeric value.", isCorrect: true },
      { answerText: "'Not a Null' - indicating the absence of a null value.", isCorrect: false },
      { answerText: "'Not a Name' - indicating an undefined or missing variable name.", isCorrect: false },
      { answerText: "'Not an Object' - indicating a variable that does not refer to an object.", isCorrect: false }
    ]
  },
]
}

//start quiz by unhiding the questions and setting progression, clicking the answer will progress the quiz

function startQuiz() {
  var Q = 0;
  startButton.setAttribute('style', 'display: none;')
  option1El.setAttribute('style', '')
  option2El.setAttribute('style', '')
  option3El.setAttribute('style', '')
  option4El.setAttribute('style', '')


  function updateQuestion() {
    if (Q < 4) {
    questionEl.textContent = quiz.quizQuestions[Q].question;

    option1El.textContent = quiz.quizQuestions[Q].answers[0].answerText;
    option1El.setAttribute('data-isCorrect', quiz.quizQuestions[Q].answers[0].isCorrect);

    option2El.textContent = quiz.quizQuestions[Q].answers[1].answerText;
    option2El.setAttribute('data-isCorrect', quiz.quizQuestions[Q].answers[1].isCorrect);

    option3El.textContent = quiz.quizQuestions[Q].answers[2].answerText;
    option3El.setAttribute('data-isCorrect', quiz.quizQuestions[Q].answers[2].isCorrect);

    option4El.textContent = quiz.quizQuestions[Q].answers[3].answerText;
    option4El.setAttribute('data-isCorrect', quiz.quizQuestions[Q].answers[3].isCorrect);

    console.log(Q);
    }

    //after the final question the quiz will end and time will stocp

    else {
      endQuiz();
      stopTime();
    };

  }

  //function to deduct time for incorrect answers and progress the quiz by adding the Q variable as well as displaying if the answer was correct

  function onNextQuestion(event) {
    console.log(event.target.textContent)
    console.log(event.target.getAttribute('data-isCorrect'))
    if (event.target.getAttribute('data-isCorrect') == 'true') {
      solution.textContent = 'Correct!'
      
    } else {
      solution.textContent = 'Wrong! You lose 10 seconds!'
      time -= 10;
    }
    Q++;
    updateQuestion();
  }

  updateQuestion();

answerButtons.forEach(button => {
  button.addEventListener('click', onNextQuestion);
});
}

//setting time and setting a condition that if time runs out an alert will show and the quiz will reset

  function setTime() {
    Timer =setInterval(function() {
      time--;
      TimerEl.textContent = time;
  
      if(time < 1) {
        stopTime();
        endQuiz();
      }
  
    }, 1000);
  };

  //function to stop the time
  function stopTime() {
    clearInterval(Timer);
  }

  //after the final question the quiz will end by clearing the questions and showing the for for submitting score, score will be stored
  function endQuiz() {

    stopTime();

    //stop score from going negative if last question is answered
    if (time < 0) {
      time = 0
      TimerEl.textContent = 0
    }

    questionEl.textContent = 'You Scored '+time+ ' Enter your name for the High Scores!'
    solution.textContent = ''
    option1El.setAttribute('style', 'display: none;')
    option1El.setAttribute('style', 'display: none;')
    option2El.setAttribute('style', 'display: none;')
    option3El.setAttribute('style', 'display: none;')
    option4El.setAttribute('style', 'display: none;')
    submitForm.setAttribute('style', '')

    submitButton.addEventListener('click', function(event) {
      event.preventDefault();

      var nameInput = document.getElementById('name');
      var name = nameInput.value;

      highScores = localStorage.getItem('highScores')

      highScores = highScores ? JSON.parse(highScores) : [];

      highScores.push({nameNote: name, timeNote: time});

      questionEl.textContent = 'You Score Has been submitted!'

      highScores.sort(function(a, b) {
        return b.timeNote - a.timeNote;
      });

      console.log(highScores);

      localStorage.setItem('highScores', JSON.stringify(highScores));
    })

  }


//function that start button will begin quiz and begin timer
  startButton.addEventListener('click', function() {
    setTime();
    startQuiz();
    }
  )