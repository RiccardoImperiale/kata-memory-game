const gameCards = ['alien', 'bug', 'duck', 'rocket', 'spaceship', 'tiktac', 'alien', 'bug', 'duck', 'rocket', 'spaceship', 'tiktac']
const gameBoard = document.querySelector('.game_board');
populateBoards()
const cards = document.querySelectorAll('.card_image');

function populateBoards() {
    const cardTemplate = `
    <div class="card">
    <img class="card_image" src="./assets/images/back.png" alt="card back">
    </div>`;

    for (let i = 0; i < gameCards.length; i++) {
        gameBoard.insertAdjacentHTML('beforeend', cardTemplate);
    }
}

cards.forEach(card => {
    card.addEventListener('click', () => {
        console.log('clicked');
    })
})

