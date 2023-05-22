const startButton = document.getElementById('startBtn');
const questionContainerElement = document.getElementById('questoin');


startButton.addEventListener("click", startGame);

var questions = [
    {question: "are you trying your best?",
    answers: 
        [{text: "Mhm", correct: false},
        {text: "No", correct: false},
        {text: "Should Be", correct: false},
        {text: "You bet!", correct: true}]
}, 
{question: "Favorite Food?",
    answers: 
        [{text: "Pizza", correct: false},
        {text: "Burgers", correct: false},
        {text: "Salad", correct: false},
        {text: "Im hungry", correct: true}]
}
]

function startGame () {
    console.log("started");
    setNextQuestion();


}

function setNextQuestion() {

}

function selectAnswer() {

}