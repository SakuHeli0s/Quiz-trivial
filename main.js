//CARGAR ELEMENTOS HTML

const welcomeContainer = document.getElementById("welcome-screen")
const btnQuiz = document.getElementById("btn-quiz")

const questionScreen = document.getElementById("question-screen")
const numberQuestions = document.getElementById("number-questions")
const statusAnswer = document.getElementById("status-answer")
const btnNext = document.getElementById("btn-next")
const questionTitle = document.querySelector(".question-title")

const resultScreen = document.getElementById("result-screen")
const totalResult = document.getElementById("total-result")
const btnPlayAgain = document.getElementById("btn-play-again")

//ARRAY PREGUNTAS

const questions = {
    pregunta: "¿Cuál es la capital de Francia?",
    opciones: ["Madrid", "París", "Roma", "Berlín"],
    correcta: "París"
}