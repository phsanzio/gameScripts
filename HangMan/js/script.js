const dict = ["albergue", "amolação", "coisas", "espaço", "graal", "idem", "javali", "língua", "negar", "penido", "qualidade", "tesouro", "vareia", "zulu"];
const qwerty = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
let chosenWordIndex = Math.floor(Math.random() * dict.length);
let word = dict[chosenWordIndex];
let clearWord = removeSpecialChars(word);
let errors = 0;
let wordsLeft = word.length;
function removeSpecialChars(word){
    let wordAux = word;
    wordAux = wordAux.replace("à", "a");
    wordAux = wordAux.replace("á", "a");
    wordAux = wordAux.replace("â", "a");
    wordAux = wordAux.replace("ã", "a");
    wordAux = wordAux.replace("ä", "a");

    wordAux = wordAux.replace("è", "e");
    wordAux = wordAux.replace("é", "e");
    wordAux = wordAux.replace("ê", "e");
    wordAux = wordAux.replace("ë", "e");

    wordAux = wordAux.replace("ì", "i");
    wordAux = wordAux.replace("í", "i");
    wordAux = wordAux.replace("î", "i");
    wordAux = wordAux.replace("ï", "i");

    wordAux = wordAux.replace("ò", "o");
    wordAux = wordAux.replace("ó", "o");
    wordAux = wordAux.replace("ô", "o");
    wordAux = wordAux.replace("õ", "o");
    wordAux = wordAux.replace("ö", "o");

    wordAux = wordAux.replace("ù", "u");
    wordAux = wordAux.replace("ú", "u");
    wordAux = wordAux.replace("û", "u");
    wordAux = wordAux.replace("ü", "u");

    wordAux = wordAux.replace("ç", "c");

    return wordAux;
}
function updateHangman(){
    const img = document.getElementById("hang_img");
    img.src = `img/${errors}.png`
}
function lockKeyboard(){
    const keys = document.getElementsByClassName("key");
    for (const key of keys) {
        key.disabled = true;
    }
}
function gameOver(){
    lockKeyboard();
    for (let i = 0; i < word.length; i++) {
        const blankLetter = document.getElementById(i.toString());
        if (!blankLetter.hasChildNodes()){
            const span = document.createElement("span");
            span.textContent = word[i].toUpperCase();
            span.className = "missed";
            blankLetter.appendChild(span);
        }
    }
    const newGameDiv = document.getElementById("newGameDiv");
    const button = document.createElement("button");
    button.textContent = "Novo jogo";
    button.id = "newGame";
    button.onclick = function() {location.reload();}
    newGameDiv.appendChild(button);
}
function checkLetter(letter){
    let foundLetter = 0;
    console.log(letter)
    for (let i = 0; i < word.length; i++) {
        if (letter.toLowerCase() === clearWord[i]){
            const blankLetter = document.getElementById(i.toString());
            const span = document.createElement("span");
            span.textContent = word[i].toUpperCase();
            blankLetter.appendChild(span);
            foundLetter += 1;
        }
    }
    if (foundLetter > 0) {
        wordsLeft -= foundLetter;
        const remain = document.getElementById("remain");
        remain.textContent = wordsLeft;
        if (wordsLeft === 0) {
            gameOver();
        }
    } else {
        errors += 1;
        document.getElementById("errors").textContent = errors;
        if (errors < 7) {
            updateHangman();
        } else {
            updateHangman();
            gameOver();
        }
    }
}
function setGame() {
    const emptyLetter = document.getElementById("letter");
    const remain = document.getElementById("remain");
    const total = document.getElementById("total");
    remain.textContent = wordsLeft;
    total.textContent = wordsLeft;
    for (let i  = 0; i < word.length; i++) {
        const letter = document.createElement("div");
        letter.className = 'letter';
        letter.id = i;
        document.getElementById("hang").appendChild(letter);
    }
    const keyboard = document.getElementById("keyboard");
    const k1 = document.getElementById("k1");
    const k2 = document.getElementById("k2");
    const k3 = document.getElementById("k3");
    for (let i = 0; i < qwerty.length; i++) {
        const key = document.createElement("button");
        key.textContent = qwerty[i];
        key.className = "key";
        key.addEventListener("click", function(){
            checkLetter(qwerty[i])
            key.disabled = true;
        })
        if (i < 10) {
            k1.appendChild(key);
        } else if (i < 19) {
            k2.appendChild(key);
        } else {
            k3.appendChild(key);
        }
    }
}