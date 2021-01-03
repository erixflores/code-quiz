var questions = [ 
    {
        prompt: "What color is grass?",
        choices: ["Brown","Purple","Green", "Red"],
        answer: 2
    },
    {
        prompt: "What color is a rose?",
        choices: ["Pink", "Orange", "Red", "Black"], 
        answer: 2
    },
    {
        prompt: "How any strings does a guitar have?",
        choices: ["Six", "Three", "Twelve", "Ten"], 
        answer: 0
    },
    {
        prompt: "What is the capital of Texas?",
        choices: ["Chicago", "McAllen", "Houston", "Austin"], 
        answer: 3
    }

    ,
    {
        prompt: "Which food was made in Italy?",
        choices: ["Burgers", "French Fries", "Pizza", "Tacos"], 
        answer: 2
    }
]
var questionIndex = 0
var timeLeft = questions.length*15

var timeId = ""

document.getElementById("start-btn").addEventListener("click", start)


function start(){
document.getElementById("StartDiv").classList.add("hide")
document.getElementById("questiondiv").classList.remove("hide")
displayQuestion()
  timeId = setInterval(clock, 1000)

}

function clock(){
    timeLeft--
    document.getElementById("timer").textContent=timeLeft
}
function displayQuestion (){
    document.getElementById("question-title").textContent=questions[questionIndex].prompt
    document.getElementById("choices").textContent=""
    for(var i=0; i < questions[questionIndex].choices.length; i++){
         var li=document.createElement("li")
         li.textContent=questions[questionIndex].choices[i]
         document.getElementById("choices").append(li)
      }
}

var score = 0;


// alert("you got " + score + "/" + questions.length);