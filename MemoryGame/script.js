/*function hideDiv(divName){
    const div = document.getElementById(divName);
    div.style.display = 'none';
}

function showDiv(divName){
    const div = document.getElementById(divName);
    div.style.display = 'flex';
}*/

const themes = ['Mortal Kombat', 'Marvel', 'Star Wars', 'Random'];

function getRandom(){
    return Math.floor(Math.random() * (themes.length - 1) + 1);
}

function chooseTheme(){
    console.log(getRandom());
}

/*function play(){
    hideDiv('initial-div');
    chooseTheme();
    showDiv('question-div');
}*/