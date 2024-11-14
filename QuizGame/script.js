function hideDiv(divName){
    const div = document.getElementById(divName);
    div.style.display = 'none';
}

function showDiv(divName){
    const div = document.getElementById(divName);
    div.style.display = 'flex';
}

const themes = ['Mortal Kombat', 'Marvel', 'Star Wars', 'Random'];

const questionsDict_MK = {"what is sub-zero's name?":{"Bi-Han":true, "Kuai Liang":false, "Liu Kang":false, "Noob Saibot":false},
                        "in which game is liu kang killed off for the first time?":{"MK: Deadly Alliance":true, "MK9":false, "MK1":false, "MK11: Aftermath":false},
                        "who killed og hanzo hasashi's clan and family?":{"Quan Chi":true, "Sub-Zero":false, "Smoke":false, "Shang Tsung":false},
                        "who blinded Kenshi Takahashi (MK1)?":{"Mileena":true, "Kitana":false, "Sindel":false, "Li Mei":false},
                        "in Mythologies:Sub-Zero, what artifact is the player trying to find?":{"Shinnok's ammulet":true, "Kronika's crown":false, "The Kamidogu":false, "Ashrah's sword":false},
                        "the Mortal Kombat tournament happens every...":{"1000 years":true, "300 years":false, "800 years":false, "100 years":false}
                    };

function getRandom(){
    return Math.floor(Math.random() * themes.length);
}

function chooseTheme(){
    console.log(getRandom());
}

function play(){
    const theme = document.getElementById('theme');
    theme.textContent = themes[0];

    const questionE = document.getElementById('questiontext');
    const op1 = document.getElementById('option1');
    const op2 = document.getElementById('option2');
    const op3 = document.getElementById('option3');
    const op4 = document.getElementById('option4');

    const score = document.getElementById('score');
    let scoreCount = 0;

    const question_keys = Object.keys(questionsDict_MK);
    let currentQuestionIndex = 0;

    setTimeout(function() {
        hideDiv('initial-div');
        showDiv('question-div');
        loadQuestion(currentQuestionIndex);
    }, 3000);

    function loadQuestion(index){
        let question = question_keys[index];
    
        let question_answers = Object.keys(questionsDict_MK[question]);

        questionE.textContent = question;
    
        op1.textContent = question_answers[0];
        op2.textContent = question_answers[1];
        op3.textContent = question_answers[2];
        op4.textContent = question_answers[3];
    }
    
    function answerHandler(e){
        const currentQuestion = question_keys[currentQuestionIndex];
        if(questionsDict_MK[currentQuestion][e.target.textContent]===true){
            scoreCount +=100;
            score.textContent = scoreCount;
        }
        currentQuestionIndex++;
        if(currentQuestionIndex<question_keys.length){
            loadQuestion(currentQuestionIndex);
        }else{
            hideDiv('question-div');
            const finalScore = document.getElementById('finalscore');
            finalScore.textContent = scoreCount;
        }
    }

    [op1, op2, op3, op4].forEach(function(op){
        op.addEventListener('click', answerHandler);
    });
}