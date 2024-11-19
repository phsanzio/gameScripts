
const restartButton = document.getElementById('restart');
const themes = {
    fruits: ['🍎', '🍌', '🍉', '🍇', '🍍', '🍊'],
    animals: ['🐶', '🐱', '🦊', '🐻', '🐼', '🐨'],
    electronics: ['💻', '📱', '🖥️', '🖱️', '⌨️', '🎧'],
    sports: ['⚽', '🏀', '🏈', '🎾', '🏐', '🥊'],
    nature: ['🌳', '🌻', '🍃', '🌍', '🌾', '🌵']
};
let flippedCards = [];
let matchedPairs = 0;


function shuffle_cards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function createBoard(theme) {
    const gameBoard = document.getElementById('game_board');
    gameBoard.innerHTML = '';
    const icons = themes[theme];
    let cards = [...icons, ...icons];
    shuffle_cards(cards);
    cards.forEach((icon, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.icon = icon;
        card.dataset.index = index;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        this.textContent = this.dataset.icon;
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }
}


function checkForMatch() {
    const [card1, card2] = flippedCards;
    flippedCards = [];
    if (card1.dataset.icon === card2.dataset.icon) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        if (document.querySelectorAll('.matched').length === document.querySelectorAll('.card').length) {
            alert('Parabéns! Você encontrou todos os pares!');
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.textContent = '';
            card2.textContent = '';
        }, 500);
    }
}


function restartGame() {
    matchedPairs = 0;
    flippedCards = [];
    createBoard();
}


restartButton.addEventListener('click', restartGame);


function startGame(theme) {
    const div_gallery = document.getElementById('gallery');
    const div_gameboard = document.getElementById('play_game');
    div_gallery.style.display = 'none';
    div_gameboard.style.display = '';
    createBoard(theme);
    const title_text = document.getElementById('title_text');
    title_text.textContent = theme;
}

function startGamePage(){
    const username = document.getElementById('username');
    if (username.value != ''){
        const div_initial = document.getElementById('initial_page');
        const div_container = document.getElementById('container');
        const name_user = document.getElementById('name_user');
        div_initial.style.display = 'none';
        div_container.style.display = '';
        name_user.textContent = username.value;
        username.value = '';
    } else {
        alert('Insira um nome por favor!');
    }   
}