const gameCards = ['alien', 'bug', 'duck', 'rocket', 'spaceship', 'tiktac', 'alien', 'bug', 'duck', 'rocket', 'spaceship', 'tiktac']
const gameBoard = document.querySelector('.game_board');
const errorsOutput = document.querySelector('.game_output > span');
const gameFinish = document.querySelector('.game_finish')
const redoBtn = document.querySelector('.redo')

const shuffledCards = shuffleCards(gameCards)
populateBoard()
const cards = document.querySelectorAll('.card_image');
turnCards()

let turnedCards = []
let errors = 0
let score = 0

redoBtn.addEventListener('click', playAgain)

function shuffleCards(arr) {
    let radomNumArr = []
    let i = 0

    while (i < arr.length) {
        let radomNum = Math.floor(Math.random() * arr.length) // 9
        if (!radomNumArr.includes(radomNum)) {
            radomNumArr.push(radomNum)
            i++
        }
    }

    let shuffledCards = []
    radomNumArr.forEach(num => shuffledCards.push(arr[num]))

    return shuffledCards;
}

function populateBoard() {
    const cardTemplate = (cardName) => `
    <div class="card">
    <img class="card_image card_hid" src="./assets/images/back.png" data-name=${cardName} alt="card back">
    </div>`;

    for (let i = 0; i < shuffledCards.length; i++) {
        gameBoard.insertAdjacentHTML('beforeend', cardTemplate(shuffledCards[i]));
    }
}

function turnCards() {
    cards.forEach(card => {
        card.addEventListener('click', function () {
            let cardName = this.dataset.name;
            this.setAttribute('src', `./assets/images/${cardName}.png`)

            gameScoring(cardName);
        })
    })
}

function gameScoring(cardName) {
    if (turnedCards.length % 2 === 0) {
        turnedCards.push(cardName)
    } else if (turnedCards.length % 2 !== 0 && turnedCards.includes(cardName)) {
        turnedCards.push(cardName)
        score++
    } else if (turnedCards.length % 2 !== 0 && !turnedCards.includes(cardName)) {
        errors++
        errorsOutput.innerHTML = errors;
        errors > 0 && (errorsOutput.parentElement.style.display = 'block')

        gameOver()
    }
    score === 6 && gameWon()
}

function gameOver() {
    score = 0
    turnedCards = []
    cards.forEach(card => {
        card.setAttribute('src', './assets/images/back.png')
    })
}

function gameWon() {
    gameFinish.style.display = 'block'
    redoBtn.style.display = 'block'
    document.body.style.backgroundColor = 'green'
}

function playAgain() {
    location.reload();
}

