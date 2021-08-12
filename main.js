const quizData = [{
        quiz: "HTML stands for",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these",
        correct: "c",
    },
    {
        quiz: "The correct sequence of HTML tags for starting a webpage is ",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Title, Body",
        correct: "d",
    },
    {
        quiz: "Which of the following element is responsible for making the text bold in HTML?",
        a: "<pre>",
        b: "<a>",
        c: "<b>",
        d: "<br>",
        correct: "c",
    },
    {
        quiz: "How to create an unordered list (a list with the list items in bullets) in HTML?",
        a: "<ul>",
        b: "<ol>",
        c: "<li>",
        d: "<i>",
        correct: "a",
    },
    {
        quiz: "<input> is -",
        a: "a format tag.",
        b: "an empty tag.",
        c: "All of the above",
        d: "None of the above",
        correct: "b",
    },
    {
        quiz: "Which of the following tag is used to define options in a drop-down selection list?",
        a: "<option>",
        b: "<select>",
        c: "<list>",
        d: "<dropdown>",
        correct: "a",
    }
];

var question = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");
var answerEls = document.querySelectorAll(".answer");
var next_btn = document.getElementById("next_btn");
var ans_txt = document.getElementById("ans-txt");
var reload_btn = document.getElementById("reload-btn");


var currentQuestion = 0;
var score = 0;


function loadQuestion() {
    const q = quizData[currentQuestion];
    question.innerText = q.quiz;
    a_text.innerText = q.a;
    b_text.innerText = q.b;
    c_text.innerText = q.c;
    d_text.innerText = q.d;
}

loadQuestion();

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
            console.log(answer);
        }
    });
    return answer;
}





// set timer 15 second
    var sec = 15;
    window.onload =function(){    
        setInterval(function(){
            document.getElementById("timer").innerHTML = sec;
            sec--;
            if(sec==0){
                currentQuestion = 0;
                loadQuestion();
                document.getElementById("timer").innerHTML = "Reloaded";
                sec=15;
            }
        },1000);  
    }


reload_btn.addEventListener('click',()=>{
    currentQuestion = 0;
    loadQuestion();
});


next_btn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            sec = 15;
            loadQuestion();
        } else {
            ans_txt.innerHTML= "your answer is : " + score + "  /  " + 6;
            reload_btn.style.visibility = "visible";
        }
    }
});




