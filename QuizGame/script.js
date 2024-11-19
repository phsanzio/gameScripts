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
    animation();
}

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
                "Who is Kurt Wagner's (Nightcrawler) mother?":{"Mystique":true, "Rogue":false, "Storm":false, "Jean Grey":false},
                "Which of these characters was Mariko engaged to?":{"Logan":true, "Charles Xavier":false, "Erik Lehnsheer":false, "Scott Summers":false},
                "In the comics, what motivated Thanos to assemble the infinity gauntlet?":{"To impress Lady Death":true, "To bring balance to the universe":false, "To rule the universe":false, "To kill everyone":false}
};

const starwars = {"What crystal powers the Jedi's lightsabers?":{"Kyber Crystals":true, "Kohlen Crystals":false, "Beskar Crystals":false, "Force Crystals":false},
                "In the Star Wars universe, the passage of time is measured based on...?":{"The Battle of Yavin":true, "The Duel of Mustafar":false, "The Coruscant Siege":false, "The Night of a Thousand Tears":false},
                "How did Anakin become a Jedi Knight in the 2003 Clone Wars animated movie?":{"By defeating Asajj Ventress in a duel":true, "By killing Count Dooku":false, "By defeating Obi-Wan in a traditional Jedi duel":false, "By killing the Dark Lord of the Sith":false},
                "Which character is trained by Anakin Skywalker?":{"Ahsoka":true, "Luke":false, "Leia":false, "Kylo Ren":false},
                "What is Padme's actual family name?":{"Naberrie":true, "Amidala":false, "Skywalker":false, "Kenobi":false},
                "Who was the first Mandalorian Jedi?":{"Tarre Vizla":true, "Bo-Katan Kryze":false, "Tal Merrik":false, "Pre Vizla":false},
                "In Empire Strikes Back, in which planet was Yoda hiding from the Empire?":{"Dagobah":true, "Naboo":false, "Kamino":false, "Geonosis":false},
                "How did Han Solo get the Millenium Falcon?":{"By winning a cards game against Lando Calrissian":true, "By robbing it from the Empire":false, "He found it abandoned in Tatooine":false, "He found it abandoned in Corellia":false},
                "What was Count Dooku's Sith name?":{"Darth Tyrannus":true, "Darth Sidious":false, "Darth Vader":false, "Darth Bane":false},
                "Which planet was the first victim of the Death Star?":{"Jedha, in Rogue One":true, "Alderaan, in A New Hope":false, "Scarif, in Rogue One":false, "Naboo, in The Phantom Menace":false}
};

const movies = {"In 'The Batman' (2022), which tool the Riddler used to kill the Mayor of Gotham City?":{"A carpet tucker":true, "A baseball bat":false, "A batarang":false, "A gun":false},
                "In 'The Lego Movie' (2014), what was the Kragle?":{"A superglue tube":true, "A type of Lego brick":false, "A good character":false, "An evil character":false},
                "In 'Jennifer's Body' (2009), who was Jennifer's first victim after becoming a succubus?":{"Ahmet, a foreign exchange student":true, "Needy, her best friend":false, "Chip, Needy's boyfriend":false, " The school's football captain":false},
                "In Nolan's Batman trilogy, which character was portrayed by Cillian Murphy?":{"Dr. Jonathan Crane a.k.a. Scarecrow":true, "The Joker":false, "Alfred Pennyworth":false, "Richard Grayson a.k.a Nightwing":false},
                "The movie '10 Things I Hate About You' (1999) was based on which Shakespeare play?":{"Taming of the Shrew":true, "Macbeth":false, "Hamlet":false, "Romeo and Juliet":false},
                "What's the next phrase in the LOTR quote: One Ring to rule them all...":{"One Ring to find them":true, "One Ring to bring them all":false, "And in the Darkness bind them":false, "For the Dark Lord in his Dark Throne":false},
                "In 'The Time Machine' (1960), which futuristic race the protagonist meets in the year 802,701?":{"Eloi":true, "Morlocks":false, "Vulcans":false, "Kaminoans":false},
                "'The Boys' actor Jack Quaid (Hughie) plays which scientist in 'Oppenheimer' (2023)?":{"Richard Feynman":true, "Werner Heisenberg":false, "Niels Bohr":false, "Enrico Fermi":false},
                "In 'Lalaland' (2016), which movie Mia and Sebastian watched at the Rialto Theater?":{"Rebel Without a Cause":true, "West Side Story":false, "Singin' in the Rain":false, "Casablanca":false},
                "In 'Mean Girls' (2004), what color should be worn on Wednesdays?":{"Pink":true, "Purple":false, "Green":false, "Blue":false}
};

const themes = ['Mortal Kombat', 'Marvel', 'Star Wars', 'Movies'];
const colors = ['#4357AD', '#FF9D00', '#064D4A', '#982649'];

function shuffleOps(array) {
    let currentIndex = array.length;
        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
    return array;
}

function getRandom(array){
    return Math.floor(Math.random() * array.length);
}

function chooseTheme(){
    console.log(getRandom());
}

function animation(){
    const themeName = document.getElementById('theme');
    const playbutton = document.getElementById('playbutton');
    let themeIndex = 0;
    const loopTheme = () => {
        themeName.textContent = themes[themeIndex];
        colorArr = shuffleOps(colors);
        themeName.style.color = colorArr[getRandom(colors)]
        themeIndex = (themeIndex+1)%themes.length;
    }
    const loopInterval = setInterval(loopTheme, 1000);
    playbutton.addEventListener('click', () =>{
        clearInterval(loopInterval);
    })
}

function play(){
    const theme = document.getElementById('theme');
    let themeNum = getRandom(themes); 
    theme.textContent = themes[themeNum];
    let questionsDict = "";
    if(themeNum==0){
        questionsDict = mortalkombat;
    }else if(themeNum==1){
        questionsDict = marvel;
    }else if(themeNum==2){
        questionsDict = starwars;
    }else if(themeNum==3){
        questionsDict = movies;
    }

    const questionE = document.getElementById('questiontext');
    const op1 = document.getElementById('option1');
    const op2 = document.getElementById('option2');
    const op3 = document.getElementById('option3');
    const op4 = document.getElementById('option4');

    const score = document.getElementById('score');
    let scoreCount = 0;

    const question_keys = Object.keys(questionsDict);
    let currentQuestionIndex = 0;

    setTimeout(function() {
        hideDiv('initial-div');
        showDiv('question-div');
        loadQuestion(currentQuestionIndex);
        changeNavText('gametime');
    }, 3000);

    function loadQuestion(index){
        let question = question_keys[index];
    
        let question_answers = Object.keys(questionsDict[question]);

        questionE.textContent = question;

        shuffleOps(question_answers);
        let opsArr = [op1, op2, op3, op4];

        for(let i=0; i<question_answers.length; i++){
            opsArr[i].textContent = question_answers[i];
        }
    }
    
    function answerHandler(e){
        const currentQuestion = question_keys[currentQuestionIndex];
        if(questionsDict[currentQuestion][e.target.textContent]===true){
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