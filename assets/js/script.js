// Variables to hold quiz containers and data
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
let currentQuestionIndex = 0;
let score = 0;
let timer;

// Example quiz data array
const quizData = [
  // Your quiz questions and answers go here
  // Example: { question: "Question 1", options: ["Option 1", "Option 2"], correctAnswer: 0 },
  {
question: "What element is a container for all the head elements, and may include the document title, scripts, styles, meta information and more?",
options:["<head></head>", "<body></body>","<title></title>","<br></br>"],
correctAnswer: 0
   ,
    question: "Which programming language is known for building web pages?",
    options: ["Java", "Python", "JavaScript"],
    correctAnswer: 2
  }
];

// Function to start the quiz
function startQuiz() {
  // Show the first question and set timer for quiz completion
  showQuestion(quizData);
  setInterval(showResult, 60000); // Set the quiz time (in milliseconds) - 1 minute in this example
}

// Function to display a quiz question
function showQuestion() {
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
  } else {
    // If all questions are answered, show the result
    showResult();
  }
}

// Function to check the selected answer and update score
function checkAnswer(selectedIndex) {
  const questionData = quizData[currentQuestionIndex];
  if (questionData.correctAnswer === selectedIndex) {
    score++;
  }
  // Move to the next question
  currentQuestionIndex++;
  // Show the next question or result
  showQuestion();
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