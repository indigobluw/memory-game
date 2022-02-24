document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'Chicken', 
            img: 'Chicken.png'
        },
        {
            name: 'Chicken', 
            img: 'Chicken.png'
        },
        {
            name: 'Dog', 
            img: 'Dog.png'
        },
        {
            name: 'Dog', 
            img: 'Dog.png'
        },
        {
            name: 'Fox', 
            img: 'Fox.png'
        },
        {
            name: 'Fox', 
            img: 'Fox.png'
        },
        {
            name: 'Panda1', 
            img: 'Panda1.png'
        },
        {
            name: 'Panda1', 
            img: 'Panda1.png'
        },
        {
            name: 'Penguin', 
            img: 'Penguin.png'
        },
        {
            name: 'Penguin', 
            img: 'Penguin.png'
        },
        {
            name: 'Pig', 
            img: 'Pig.png'
        }, 
        {
            name: 'Pig', 
            img: 'Pig.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random()) //refreshes the cards position after a won/restarted game


const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
//empty arrays
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

function createBoard() { 
    for (let i = 0; i < cardArray.length; i++) { 
        var card = document.createElement('img')
        card.setAttribute('src', 'images/BackofCard1.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]) { //if there's a match in cards
        alert('Cards match!')
        cards[optionOneId].setAttribute('src', 'Blank1.png')
        cards[optionTwoId].setAttribute('src', 'Blank1.png')
        cardsWon.push(cardsChosen)
    }
    else { //if there's not a match
        cards[optionOneId].setAttribute('src', 'BackofCard1.png') //flip the card
        cards[optionTwoId].setAttribute('src', 'BackofCard1.png')
        alert ('No match, try again')
    }
    //either way of the two choices happening I want this to happen 
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) { //collected all possible cards in the cardsarray
        resultDisplay.textContent = 'Congrats, you won!'
    }
}

function flipcard(){ 
    var cardId = this.getAttrribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) //if two cards are picked
    setTimeout(checkForMatch, 500) //timeout, 500ms
}

createBoard()

})