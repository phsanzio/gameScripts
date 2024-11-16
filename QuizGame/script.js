function hideDiv(divName){
    const div = document.getElementById(divName);
    div.style.display = 'none';
}

function showDiv(divName){
    const div = document.getElementById(divName);
    div.style.display = 'flex';
}

function changeNavText(state){
    let navtext = document.getElementById('navbartext');
    let score = document.getElementById('score');
    if(state==='initial' || state==='final'){
        navtext.textContent = "QuizGame";
        score.style.display = "none";
    }
    if(state==='gametime'){
        navtext.textContent = "Score: ";
        score.style.display = "inline";
    }
}

function initialize(){
    changeNavText('initial');
    hideDiv('question-div');
    hideDiv('final-div');
}

const themes = ['Mortal Kombat', 'Marvel', 'Star Wars', 'Random'];

const mortalkombat = {"What is Sub-Zero's name?":{"Bi-Han":true, "Kuai Liang":false, "Liu Kang":false, "Noob Saibot":false},
                        "In which game is Liu Kang killed off for the first time?":{"MK: Deadly Alliance":true, "MK9":false, "MK1":false, "MK11: Aftermath":false},
                        "Who killed the OG Hanzo Hasashi's (Scorpion) clan and family?":{"Quan Chi":true, "Sub-Zero":false, "Smoke":false, "Shang Tsung":false},
                        "Who blinded Kenshi Takahashi (MK1)?":{"Mileena":true, "Kitana":false, "Sindel":false, "Li Mei":false},
                        "In Mythologies:Sub-Zero, what artifact is the player trying to find?":{"Shinnok's ammulet":true, "Kronika's crown":false, "The Kamidogu":false, "Ashrah's sword":false},
                        "The Mortal Kombat tournament happens every...":{"1000 years":true, "300 years":false, "800 years":false, "100 years":false},
                        "Who is Raiden's brother?":{"Fujin":true, "Liu Kang":false, "Kung Lao":false, "Shang Tsung":false},
                        "Which Hollywood actor was Johnny Cage based on?":{"Jean-Claude Van Damme":true, "Nicholas Cage":false, "Chris Evans":false, "Hugh Jackman":false},
                        "Which ninja was the first hidden character back in the original game?":{"Reptile":true, "Ermac":false, "Smoke":false, "Sub-Zero":false},
                        "Which characters were trapped in a void by Kronika when she decided to remake the timeline?":{"Shang Tsung, Fujin and Nightwolf":true, "Fujin, Raiden and Scorpion":false, "Shang Tsung, Quan Chi, Shao Khan":false, "Nightwolf, Sindel, Mileena":false}
};

const marvel = {"In the MCU, for how many years was Captain America frozen in Antarctica?":{"66 years":true, "100 years":false, "70 years":false, "50 years":false},
                "What's the name of Thor's hammer?":{"Mjolnir":true, "Stormbreaker":false, "Nidavellir":false, "Jonathan":false},
                "Who are the children of Magneto?":{"Wanda, Pietro and Polaris":true, "Wanda and Pietro":false, "Wanda, Pietro and Rogue":false, "Pietro":false},
                "How many infinity stones are there?":{"6":true, "5":false, "4":false, "7":false},
                "Who guarded the Soul Stone in Vormir?":{"Red Skull":true, "Ultron":false, "Dormammu":false, "Knull":false},
                "In the Fox X-Men movies, when was Wolverine born?":{"1832":true, "1882":false, "1776":false, "1980":false},
                "How did the Fantastic Four gain their powers?":{"A gama-rays explosion in space hit them":true, "They were born mutants":false, "Through enhancing experiments":false, "The super-soldier serum":false},
                "":{}
};

const starwars = {};

const random = {};

function shuffleOps(array) {
    let currentIndex = array.length;
        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
    return array;
}

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

    const question_keys = Object.keys(mortalkombat);
    let currentQuestionIndex = 0;

    setTimeout(function() {
        hideDiv('initial-div');
        showDiv('question-div');
        loadQuestion(currentQuestionIndex);
        changeNavText('gametime');
    }, 3000);

    function loadQuestion(index){
        let question = question_keys[index];
    
        let question_answers = Object.keys(mortalkombat[question]);

        questionE.textContent = question;

        shuffleOps(question_answers);
        let opsArr = [op1, op2, op3, op4];

        for(let i=0; i<question_answers.length; i++){
            opsArr[i].textContent = question_answers[i];
        }
    }
    
    function answerHandler(e){
        const currentQuestion = question_keys[currentQuestionIndex];
        if(mortalkombat[currentQuestion][e.target.textContent]===true){
            e.target.style.border = "0.2em solid #0f0"
            scoreCount +=100;
            score.textContent = scoreCount;
        }else{
            e.target.style.border = "0.2em solid #f00"
        }
        setTimeout(function() {
            e.target.style.border = "none";
            currentQuestionIndex++;
            if(currentQuestionIndex<question_keys.length){
                loadQuestion(currentQuestionIndex);
            }else{
                hideDiv('question-div');
                const finalScore = document.getElementById('finalscore');
                finalScore.textContent = scoreCount;
                changeNavText('final');
                showDiv('final-div');
            }
        }, 2000);
    }

    [op1, op2, op3, op4].forEach(function(op){
        op.addEventListener('click', answerHandler);
    });
}

function replay(){
    location.reload();
}