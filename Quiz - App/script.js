const questions = [
  {
      question : "what is the largest animal in planet?",
      answers:[
          {   text: "shark", correct: false },
          {   text: "blue whale", correct: true },
          {   text: "elephant", correct: false},
          {   text: "giraffe", correct: false}
      ]
  },

  {   
      question :  "what is the capital of France?",
      answers:[
          {   text: "Paris", correct: true },
          {   text: "London", correct: false },
          {   text: "Berlin", correct: false},
          {   text: "Madrid", correct: false}
      ]
  },
  {
      question : "what is the largest planet in our solar system?",
      answers:[
          {   text: "Earth", correct: false },
          {   text: "Jupiter", correct: true },
          {   text: "Mars", correct: false},
          {   text: "Saturn", correct: false}
      ]
  },
  {
      question : "what is the smallest country in the world?",
      answers:[
          {   text: "Vatican City", correct: true },
          {   text: "Monaco", correct: false },
          {   text: "San Marino", correct: false},
          {   text: "Nauru", correct: false}
      ]
  },
  {
      question : "what is the largest desert in the world?",
      answers:[
          {   text: "Sahara", correct: true },
          {   text: "Arabian", correct: false },
          {   text: "Gobi", correct: false},
          {   text: "Kalahari", correct: false}
      ]
  },
  {
      question : "what is the largest ocean in the world?",
      answers:[
          {   text: "Atlantic", correct: false },
          {   text: "Indian", correct: false },
          {   text: "Pacific", correct: true},
          {   text: "Arctic", correct: false}
      ]
  },
  {
      question : "what is the largest animal in planet?",
      answers:[
          {   text: "shark", correct: false },
          {   text: "blue whale", correct: true },
          {   text: "elephant", correct: false},
          {   text: "giraffe", correct: false}
      ]
  },
  {
      question : "what is the largest animal in planet?",
      answers:[
          {   text: "shark", correct: false },
          {   text: "blue whale", correct: true },
          {   text: "elephant", correct: false},
          {   text: "giraffe", correct: false}
      ]
  },
  {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Rome", correct: false }
      ]
    },
    {
      question: "Who wrote 'Hamlet'?",
      answers: [
        { text: "William Shakespeare", correct: true },
        { text: "Charles Dickens", correct: false },
        { text: "Mark Twain", correct: false },
        { text: "Leo Tolstoy", correct: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Mercury", correct: false }
      ]
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: [
        { text: "Au", correct: true },
        { text: "Ag", correct: false },
        { text: "Fe", correct: false },
        { text: "Pb", correct: false }
      ]
    },
    {
      question: "What gas do plants absorb from the atmosphere?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Nitrogen", correct: false },
        { text: "Carbon dioxide", correct: true },
        { text: "Hydrogen", correct: false }
      ]
    },
    {
      question: "Who is the founder of Microsoft?",
      answers: [
        { text: "Steve Jobs", correct: false },
        { text: "Bill Gates", correct: true },
        { text: "Elon Musk", correct: false },
        { text: "Mark Zuckerberg", correct: false }
      ]
    },
    {
      question: "What does 'HTML' stand for?",
      answers: [
        { text: "Hyper Text Markup Language", correct: true },
        { text: "High Transfer Machine Language", correct: false },
        { text: "Hyperlink Transfer Markup Language", correct: false },
        { text: "High Tech Machine Learning", correct: false }
      ]
    },
    {
      question: "In which year did World War II end?",
      answers: [
        { text: "1945", correct: true },
        { text: "1918", correct: false },
        { text: "1939", correct: false },
        { text: "1950", correct: false }
      ]
    },
    {
      question: "Who was the first president of the United States?",
      answers: [
        { text: "George Washington", correct: true },
        { text: "Abraham Lincoln", correct: false },
        { text: "Thomas Jefferson", correct: false },
        { text: "John Adams", correct: false }
      ]
    }
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const NextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score  = 0;

function startQuiz(){
  currentQuestionIndex   =  0;
  score = 0;
  NextButton.innerHTML = "Next";
  showQustion();
}

function showQustion(){
  resetState()  ;
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  question;

  currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text; 
      button.classList.add("btn");
      answerElement.appendChild(button);
       if(answer.correct){
            button.dataset.correct = true;
       }
  });
}

function resetState(){
  NextButton.style.display = "none";
  while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);

  }
}

function selectAnswer(e){
const selectedButton =  e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if(isCorrect){
    selectedButton.classList.add("correct");
}else{
    selectedButton.classList.add("inncorrect");
} 
}

startQuiz();    
