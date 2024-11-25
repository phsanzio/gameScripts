const themes = {
    fruits: ['🍎', '🍌', '🍉', '🍇', '🍍', '🍊'],
    animals: ['🐶', '🐱', '🦊', '🐻', '🐼', '🐨'],
    electronics: ['💻', '📱', '🖥️', '🖱️', '⌨️', '🎧'],
    sports: ['⚽', '🏀', '🏈', '🎾', '🏐', '🥊'],
    nature: ['🌳', '🌻', '🍃', '🌍', '🌾', '🌵']
};
let flippedCards = [];
let matchedPairs = 0;
let attempts = 0;
let startTime = null;
let isRunning = false;
let themeGame = '';



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
    startTimer();
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
            stopTimer();
            endGame();
        }
    } else {
        getAttempts();
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.textContent = '';
            card2.textContent = '';
        }, 500);
    }
}

function endGame(){
    const div_endgame = document.getElementById('div_result');
    const div_container = document.getElementById('container');
    div_container.style.filter = 'blur(5px)';
    div_container.style.pointerEvents = 'none';
    div_endgame.style.display = '';
}

function getAttempts(){
    attempts++;
    const text_attempts = document.getElementById('attempts')
    text_attempts.textContent = `Tentativas: ${attempts}`;
}


function restartGame() {
    matchedPairs = 0;
    flippedCards = [];
    attempts = 0;
    startTime = null;
    isRunning = false;
    const stats_rep = document.getElementById('attempts');
    const stats_time = document.getElementById('timer');
    stats_rep.textContent = 'Tentativas: 0';
    stats_time.textContent = 'Tempo: 0';
    const div_endgame = document.getElementById('div_result');
    const div_container = document.getElementById('container');
    div_container.style.filter = '';
    div_container.style.pointerEvents = '';
    div_endgame.style.display = 'none';
    createBoard(themeGame);
}


function startGame(theme) {
    const div_gallery = document.getElementById('gallery');
    const div_gameboard = document.getElementById('play_game');
    const div_stats = document.getElementById('stats');
    const div_user = document.getElementById('icon_username');
    div_gallery.style.display = 'none';
    div_user.style.display = 'none';
    div_stats.style.display = '';
    div_gameboard.style.display = '';
    themeGame = theme;
    createBoard(themeGame);
    const title_text = document.getElementById('title_text');
    title_text.textContent = themeGame;
}

function startGamePage(){
    const username = document.getElementById('username');
    if (username.value != ''){
        const div_initial = document.getElementById('initial_page');
        const div_container = document.getElementById('container');
        const name_user = document.getElementById('name_user');
        const div_stats = document.getElementById('stats');
        div_stats.style.display = 'none';
        div_initial.style.display = 'none';
        div_container.style.display = '';
        name_user.textContent = username.value;
        username.value = '';
    } else {
        alert('Insira um nome por favor!');
    }   
}

function startTimer() {
    startTime = Date.now();
    isRunning = true;
    getTimer();
}

function getTimer() {
    if (!isRunning) return;
    const time = Math.floor((Date.now() - startTime) / 1000);
    const div_timer = document.getElementById("timer");
    div_timer.textContent = `Tempo: ${time}s`;
    requestAnimationFrame(getTimer);
}

function stopTimer() {
    isRunning = false;
}