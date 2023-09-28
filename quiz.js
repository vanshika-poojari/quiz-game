const questionbox = document.getElementById("questionBox")
const choicesbox = document.getElementById("choices")
const userScore = document.getElementById("user")
const startQuiz = document.getElementById("buttons")

let score = 0; 


// Making an array storing questions choices and answers
const quizbox = [
    {
        question: " Q1.  Commonly used data types DO NOT include: ",
        choices:["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "Q2. Which of the following is not a CSS box model property? ",
        choices:["margin", "padding", "border-radius", "border-collapse"],
        answer: "border-collapse"
    },
    {
        question: "Q3. Which of the following is not a JavaScript data type? ",
        choices:["string", "boolean", "objects", "float"],
        answer: "float"
    },
    {
        question: "Q4. What is the purpose of the this keyword in JavaScript ",
        choices:["it refers to the current function", "it refers to the current object", "it refers to any object", "it refers to a memory location"],
        answer: "it refers to the current object"
    }
];



let currentQuestionIndex = 0; 
//function to show questions 
function showQuestions(){ 
    // alert ("clicked");
    const firstQuestion = quizbox[currentQuestionIndex];
   questionbox.textContent = firstQuestion.question;

   choicesbox.textContent = "";
   for(let i = 0; i<firstQuestion.choices.length; i++){
    const currentchoice = firstQuestion.choices[i];
    const choicediv = document.createElement('div');
    choicediv.textContent = currentchoice; 
    choicediv.classList.add('choice'); 
    choicesbox.appendChild(choicediv);

choicediv.addEventListener('click', () => {
if (choicediv.classList.contains('selected')){
    choicediv.classList.remove('selected')
}
else{
    choicediv.classList.add('selected')
}

})


   }


}
// function checkAnswer(){
//     const selectedChoice = document.querySelector('.choice.selected');
//     if (selectedChoice.textContent === quizbox[currentQuestionIndex].answer){
//         alert("right answer")        
//         score++;
//     }
//     else{
//         alert("wrong answer")
//     }
function checkAnswer() {

    const selectedChoice = document.querySelector(".choice.selected");
    if (selectedChoice.textContent === quizbox[currentQuestionIndex].answer) {
      selectedChoice.style.backgroundColor = "green";
      score++;
      preventdefault();
    } else {
      selectedChoice.style.backgroundColor = "red";
      preventdefault();
    }
    currentQuestionIndex++;
    if(currentQuestionIndex<quizbox.length){
        showQuestions();
    } else{
        checkScore();
    }
  
}

//function to show score

const checkScore = () => {
    questionbox.textContent = "";
    choicesbox.textContent= "";
    userScore.textContent = ` You scored ${score} out of ${quizbox.length}`
    startQuiz.textContent = "Play Again!";
    startQuiz.addEventListener('click', function(){
        currentQuestionIndex = 0; 
        showQuestions();
    })
}


showQuestions(); 
startQuiz.addEventListener("click", function(){
    startQuiz.innerHTML = "Next"
    checkAnswer();
    
    })












// function beginQuiz(){
//     questionAsked.innerHTML = questions[currentQuestion].question;
    
// }
