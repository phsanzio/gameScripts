const dict = ["nagger", "cricket", "stem", "cop", "fears"];
const qwerty = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
let chosenWordIndex = Math.floor(Math.random() * dict.length);
let word = dict[chosenWordIndex];
let errors = 0;
let wordsLeft = word.length;
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
function checkLetter(letter){
    let foundLetter = false;
    console.log(letter)
    for (let i = 0; i < word.length; i++) {
        if (letter.toLowerCase() === word[i]){
            const blankLetter = document.getElementById(i.toString());
            const span = document.createElement("span");
            span.textContent = word[i].toUpperCase();
            blankLetter.appendChild(span);
            foundLetter = true;
        }
    }
    if (foundLetter) {
        wordsLeft -= 1;
        const remain = document.getElementById("remain");
        remain.textContent = wordsLeft;
        if (wordsLeft === 0) {
            lockKeyboard();
        }
    } else {
        errors += 1;
        document.getElementById("errors").textContent = errors;
        if (errors < 7) {
            updateHangman();
        } else {
            updateHangman();
            lockKeyboard();
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