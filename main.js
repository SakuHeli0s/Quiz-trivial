//CARGAR ELEMENTOS HTML AL JS

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
const btnHome = document.getElementById("btn-home")


//ARRAY DE PREGUNTAS

const questions = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        opciones: ["Madrid", "París", "Roma", "Berlín"],
        correcta: "París"
    },
    {
        pregunta: "¿Quién escribió 'La Odisea'?",
        opciones: ["Eúripides", "Sófocles", "Homero", "Aristóteles"],
        correcta: "Homero"
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        opciones: ["Nilo", "Misisipi", "Amazonas", "Yangtsé"],
        correcta: "Nilo"
    },
    {
        pregunta: "¿Qué colores tiene la bandera de México?",
        opciones: ["Blanco, azul y rojo", "Verde, blanco y rojo", "Rojo, amarillo y verde", "Blanco, rojo y naranja"],
        correcta: "Verde, blanco y rojo"
    },
    {
        pregunta: "¿Cuándo acabó la Segunda Guerra Mundial?",
        opciones: ["1954", "1945", "1949", "1952"],
        correcta: "1945"
    },
    {
        pregunta: "¿Dónde se encuentra 'La Sagrada Familia?'",
        opciones: ["Valencia", "País Vasco", "Andalucía", "Barcelona"],
        correcta: "Barcelona"
    },
    {
        pregunta: "¿Cuál es el producto que se cultiva más en Guatemala?",
        opciones: ["Café", "Arroz", "Cereal", "Cacao"],
        correcta: "Café"
    },
    {
        pregunta: "¿Qué significan las siglas 'FIFA'?",
        opciones: ["Federation International France Association", "France International Family Antropic", "Fédération Internationale de Football Association", "Federation Imposible Football Association"],
        correcta: "Fédération Internationale de Football Association"
    },
    {
        pregunta: "¿Cuál es la moneda del Reino Unido?",
        opciones: ["Euro", "Libra", "Penique", "Peseta"],
        correcta: "Libra"
    },
    {
        pregunta: "¿Cuál es el color que representa la esperanza?",
        opciones: ["Azul", "Blanco", "Verde", "Rosa"],
        correcta: "Verde"
    }
]


//CÓDIGO TRIVIAL

//VARIABLES

let numeroPregunta = 0
let aciertosPregunta = 0
let respuestaUsuario = false
let respuestasUsuario = []
let preguntaActual



//FUNCION PREGUNTAS

function mostrarPregunta (){
    preguntaActual = questions[numeroPregunta]
    questionTitle.textContent = preguntaActual.pregunta

    const botonesRespuesta = document.querySelectorAll(".btn-question")
    botonesRespuesta.forEach((boton, indice) => {
        boton.textContent = preguntaActual.opciones[indice]
        boton.dataset.respuesta = preguntaActual.opciones[indice]
        boton.addEventListener("click", comprobarRespuesta)
    })

    numberQuestions.textContent = (numeroPregunta + 1) + " de " + questions.length
}



//FUNCION ESCONDER PANTALLA BIENVENIDA

function iniciarQuiz (){
    welcomeContainer.style.display = "none"
    questionScreen.style.display = "block"
    mostrarPregunta()
}

btnQuiz.addEventListener("click", iniciarQuiz)



//FUNCION RESPUESTA CORRECTA O INCORRECTA

function comprobarRespuesta(e){
    if(respuestaUsuario) return
    respuestaUsuario = true

    const seleccionUsuario = e.target.dataset.respuesta

    if(seleccionUsuario === preguntaActual.correcta){
        aciertosPregunta++
        statusAnswer.textContent = "¡Correcto!"
        statusAnswer.classList.add("correct")
    }else{
        statusAnswer.textContent = "¡Incorrecto!"
        statusAnswer.classList.add("incorrect")
    }

    respuestasUsuario.push(seleccionUsuario)
}



//FUNCION SIGUIENTE PREGUNTA

function siguientePregunta(){
    statusAnswer.textContent = ""
    statusAnswer.classList.remove("correct", "incorrect")

    numeroPregunta++
    respuestaUsuario = false

    if(numeroPregunta >= questions.length){
        questionScreen.style.display = "none"
        resultScreen.style.display = "block"
        mostrarResultados()
    }else{
        mostrarPregunta()
    }
}

btnNext.addEventListener("click", siguientePregunta)



//FUNCION MOSTRAR RESULTADOS

function mostrarResultados(){
    totalResult.innerHTML = `<p>Has acertado ${aciertosPregunta} de ${questions.length} preguntas.</p>`

    questions.forEach((pregunta, indice) => {
        const icono = respuestasUsuario[indice] === pregunta.correcta ? "✅" : "❌"
        totalResult.innerHTML += `<p>${icono} ${pregunta.pregunta}</p>`
    })
}


//RESETEAR TRIVIAL

function reiniciarQuiz(){
    numeroPregunta = 0
    aciertosPregunta = 0
    respuestaUsuario = false
    respuestasUsuario = []
    preguntaActual = null

    resultScreen.style.display = "none"
    questionScreen.style.display = "block"

    mostrarPregunta()
}

btnPlayAgain.addEventListener("click", reiniciarQuiz)


//FUNCION REGRESAR AL INICIO DEL QUIZ

function irAlInicio(){
    numeroPregunta = 0
    aciertosPregunta = 0
    respuestaUsuario = false
    respuestasUsuario = []
    preguntaActual = null

    resultScreen.style.display = "none"
    welcomeContainer.style.display = "block"
}

btnHome.addEventListener("click", irAlInicio)