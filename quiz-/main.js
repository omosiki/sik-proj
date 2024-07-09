let correct = ""
const data = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "JavaScript",
        c: "Phython",
        d: "C++",
        correct: "b",
    },
    {
        question: "Which among them is a protein food?",
        a: "Crab",
        b: "Rice",
        c: "Garri",
        d: "nono of the above",
        correct: "a",
    },
    {
        question: "What does css stands for?",
        a: "Center style sheet",
        b: "Cascading style sheet",
        c: "Decorate our code",
        d: "Solve our problem",
        correct: "b",
    },
    {
        question: "What does HTMl stand for?",
        a: "Hypertext markup language ",
        b: "Hyper loop machine language",
        c: "Hypertools for html",
        d: "Hypertext for broswer",
        correct: "a",
    },
    
]
const quiz = document.getElementById("quiz")
const answeris = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")


const submitBtn = document.getElementById("butt")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswer()

    const currentQuizData = data[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswer(){
    answeris.forEach((answerEl) => (
        answerEl.checked = false
    ))
}

function getselected(){
    let answer
    
   answeris.forEach((answerEl) => {
    if(answerEl.checked){
        answer = answerEl.id
    }
   })
   return answer
};
 submitBtn.addEventListener("click", () => {
    const answer = getselected()

    if(answer){
        if(answer === data[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < data.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML = `
            
            <h2>You answer ${score}/${data.length} question correctly</h2>

            <button onclick="location.reload()">Do it again</button>

           `
        }
    }
 })