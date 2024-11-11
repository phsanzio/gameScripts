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
                        
const randomDict = {"What is the atomic number of Uranium?":{"12":false, "92":true, "74":false, "22":false}}

function getRandom(){
    return Math.floor(Math.random() * themes.length);
}

function chooseTheme(){
    console.log(getRandom());
}

function play(){
    const theme = document.getElementById('theme');
    theme.textContent = themes[0];
    var millisecondsToWait = 3000;
    setTimeout(function() {
        hideDiv('initial-div');
        showDiv('question-div');
    }, millisecondsToWait);
    const question = document.getElementById('questiontext');
    const op1 = document.getElementById('option1');
    const op2 = document.getElementById('option2');
    const op3 = document.getElementById('option3');
    const op4 = document.getElementById('option4');
    const score = document.getElementById('score');
    let scoreCount = 0;

    const question_keys = Object.keys(questionsDict_MK);

    for(let i = 0; i < question_keys.length; i++){
        question.textContent = question_keys[i];
        let answers = Object.keys(questionsDict_MK[question_keys[i]]);
        op1.textContent = answers[0];
        op2.textContent = answers[1];
        op3.textContent = answers[2];
        op4.textContent = answers[3];

        [op1, op2, op3, op4].forEach(function(e){
            e.addEventListener('click', function(){
                if(questionsDict_MK[element][e.textContent]==true){
                    scoreCount += 100;
                    score.textContent = scoreCount;
                }
            });
        });
    }
    /*question_keys.forEach(element => {
        question.textContent = element;
        const answers = Object.keys(questionsDict_MK[element]);
        op1.textContent = answers[0];
        op2.textContent = answers[1];
        op3.textContent = answers[2];
        op4.textContent = answers[3];

        [op1, op2, op3, op4].forEach(function(e){
            e.addEventListener('click', function(){
                if(questionsDict_MK[element][e.textContent]==true){
                    scoreCount += 100;
                    score.textContent = scoreCount;
                }
            });
        });
    });*/
}