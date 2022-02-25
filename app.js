document.addEventListener('DOMContentLoaded', () => {
  //card options
    const cardArray = [
        {
            name: 'Chicken', 
            img: './images/Chicken.png'
        },
        {
            name: 'Chicken', 
            img: './images/Chicken.png'
        },
        {
            name: 'Dog', 
            img: './images/Dog.png'
        },
        {
            name: 'Dog', 
            img: './images/Dog.png'
        },
        {
            name: 'Fox', 
            img: './images/Fox.png'
        },
        {
            name: 'Fox', 
            img: './images/Fox.png'
        },
        {
            name: 'Panda1', 
            img: './images/Panda1.png'
        },
        {
            name: 'Panda1', 
            img: './images/Panda1.png'
        },
        {
            name: 'Penguin', 
            img: './images/Penguin.png'
        },
        {
            name: 'Penguin', 
            img: './images/Penguin.png'
        },
        {
            name: 'Pig', 
            img: './images/Pig.png'
        }, 
        {
            name: 'Pig', 
            img: './images/Pig.png'
        }
    ]

    //var cardArray = require('./data.json');
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/BackofCard1.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/BackofCard1.png')
        cards[optionTwoId].setAttribute('src', 'images/BackofCard1.png')
        alert('You have selected the same image, try again')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Match!')
        cards[optionOneId].setAttribute('src', 'images/Blank1.png')
        cards[optionTwoId].setAttribute('src', 'images/Blank1.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/BackofCard1.png')
        cards[optionTwoId].setAttribute('src', 'images/BackofCard1.png')
        //alert('No match')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length

      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'You won'
      }
    }
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })