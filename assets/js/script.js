// Variables to hold quiz containers and data
const startContainer = document.getElementById('start-container');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
let currentQuestionIndex = 0;
let score = 0;
let timer;

//quiz data array
const quizData = [
    {
      question: "What is a JavaScript element that represents either TRUE or FALSE values?",
      options: ["Boolean", "RegExp", "Condition", "Event"],
      correctAnswer: 0
    },
    {
      question: "Which programming language is known for building web pages?",
      options: ["Java", "Python", "JavaScript"],
      correctAnswer: 2
    },
    {
      question: "What tag is used to define an image or add an image to an HTML page?",
      options: ["<table>", "<meta>", "<div>", "<img>"],
      correctAnswer: 3,
    }
  ];

// Function to start the quiz with a timer
function startQuiz() {
  startContainer.classList.add('d-none');
  quizContainer.classList.remove('d-none');
  // Show the first question and set timer for quiz completion
  showQuestion();
  setTimeout(showResult, 60000); // Set the quiz time limit (in milliseconds) - 1 minute in this example
}

// Function to display a quiz question
function showQuestion() {
  currentQuestionIndex = 0; // Reset currentQuestionIndex to 0
  const questionData = quizData[currentQuestionIndex];
  if (questionData) {
      // Generate HTML for question and answer options
      const optionsHtml = questionData.options.map((option, index) => {
          return `<button class="btn btn-primary" onclick="checkAnswer(${index})">${option}</button>`;
      }).join('');

      // Update quiz container with question and options
      quizContainer.innerHTML = `
      <h2>${questionData.question}</h2>
      ${optionsHtml}
    `;

      // Display the current score
      document.getElementById('score').innerText = `Score: ${score}`;
  } else {
      // If all questions are answered, show the result
      showResult();
  }
}
  
// Function to check the selected answer and update score
function checkAnswer(selectedIndex) {
  const questionData = quizData[currentQuestionIndex];
  var testArr = Object.values(questionData);

  console.log(questionData);
  if (questionData.correctAnswer === selectedIndex) {
      score++;
  }


  // Move to the next question
  currentQuestionIndex++;
    // Show the next question or result
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
    }

// Function to display the quiz result
function showResult() {
  // Display the final score
  resultContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your score is: ${score}</p>
  `;
  // Hide the quiz container and show the result container
  quizContainer.classList.add('d-none');
  resultContainer.classList.remove('d-none');
}

// Start the quiz when the page loads
startQuiz();

