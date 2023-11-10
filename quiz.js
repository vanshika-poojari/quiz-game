const questionbox = document.getElementById("questionBox")
const choicesbox = document.getElementById("choices")
const userScore = document.getElementById("userscore")
const startQuiz = document.getElementById("buttons")
const text  = document.querySelector("text")
const container = document.getElementById("container")
const firstbutton  = document.getElementById("firstbutton")
const alert = document.getElementById("alert")
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


//checking then marking correct or incorrect 

function checkAnswer() {

    const selectedChoice = document.querySelector(".choice.selected");
    if (selectedChoice.textContent === quizbox[currentQuestionIndex].answer) {
      selectedChoice.style.backgroundColor = "green";
      score++;
    
    } else {
      selectedChoice.style.backgroundColor = "red";
     
    }
    currentQuestionIndex++;
    if(currentQuestionIndex<quizbox.length){
        showQuestions();
    } else{
        checkScore();
    }
  
}

// function to show score 

const checkScore = () => {
    questionbox.textContent = "";
    choicesbox.textContent= "";
    userScore.textContent = ` Hooray! You scored ${score} out of ${quizbox.length}`
    startQuiz.textContent = "Play Again!";
    alert.style.display = "none";
    startQuiz.addEventListener('click', function(){
        userScore.textContent = "";
        questionbox.style.width = "100px"
        startQuiz.textContent = "Next"
        currentQuestionIndex = 0;
        showQuestions();
    
    })
}

//showing alert for correct or incorrect answers 

const displayAlert = (msg) =>{
    alert.style.display = "block"; 
    alert.textContent = msg; 
}

//buttons and their functions

startQuiz.textContent = ""; 
startQuiz.style.display = "none";
firstbutton.addEventListener('click', function(){ 
    startQuiz.textContent = "Next"
    startQuiz.style.display = "block"
    showQuestions();
    firstbutton.textContent = ""; 
    firstbutton.style.display = "none";

    startQuiz.addEventListener('click', function(){
        const selectedChoice = document.querySelector(".choice.selected");
        if (selectedChoice.textContent === quizbox[currentQuestionIndex].answer) {
            // alert("correct");
            displayAlert("correct")
          score++;
        
        } else {
            displayAlert("incorrect")
        //   alert("incorrect")
          
        }
        currentQuestionIndex++;
        if(currentQuestionIndex<quizbox.length){
            showQuestions();
        } else{
            checkScore();
        }
    })
var div = document.createElement("div");
document.getElementById("main").appendChild(div);

})












