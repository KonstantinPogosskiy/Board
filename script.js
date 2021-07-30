const board = document.querySelector('#board')
const colors = ['#fff82d', '#ff1212', '#00adff', '#c5b5ff', '#ff00fa', '#ffec00', '#ffa4ba', '#732bea', '#bf7979', '#b5aa18' ]
const SQUARES_NUMBER = 1802

for(let i = 0; i < SQUARES_NUMBER; i++ ) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event) {
    const color = getRandomColor()
    event.target.style.background = color
    event.target.style.boxShadow = `0 0 10px ${color}, 0 0 400px ${color}`
}

function removeColor(event) {
    event.target.style.backgroundColor = '#1d1d1d'
    event.target.style.boxShadow = '0 0 200px #1d1d1d'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}