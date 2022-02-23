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


const grid = document.querySelector('.grid')

function createBoard() { 
    for (let i = 0; i < cardArray.length; i++) { 
        var card = document.createElement('img')
        card.setAttribute('src', 'images/BackofCard1.png')
        card.setAttribute('data-id', i)
        //card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

createBoard()

})