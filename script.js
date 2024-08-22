//Element Declarations


const container = document.querySelector('.container')

const sizeButton = document.querySelector('#sizeButton')
const blackColorButton = document.querySelector('#blackButton')
const randomColorButton = document.querySelector('#randomButton')
const eraseButton = document.querySelector('#eraseButton')

let currentColor = 'black'

sizeButton.addEventListener('click',changeGridSize)
blackColorButton.addEventListener('click',()=>{
    currentColor = 'black'
})

randomColorButton.addEventListener('click',()=>{
    currentColor = 'random'
})

eraseButton.addEventListener('click',()=>{
    currentColor = 'erase'
})

const board = document.createElement('div')
board.classList.add('board')
container.appendChild(board)

board.addEventListener('mouseover',(e)=>{
    if(e.target.classList.contains("box")){
        switch(currentColor){
            case 'black':
                e.target.style.backgroundColor = 'black'
                break
            case 'erase':
                e.target.style.backgroundColor = 'white'
                break

            case 'random':
                e.target.style.backgroundColor = generateRandomColor()
        }
        
    }
})


function createGrid(size){
    clearGrid()
    for(let col = 0; col <size; col++){
        const column = document.createElement('div')
        column.setAttribute("class",'col')
        column.setAttribute('id',col)
        for(let square = 0; square < size; square++){
            const box = document.createElement('div')
            box.setAttribute('class','box')
            box.setAttribute('id',`${col}-${square}`)
            column.appendChild(box)
        }
        board.appendChild(column)
    }
}

function clearGrid(){
    board.innerHTML = ''
}

function changeGridSize(){
    let userInput = prompt("Enter a new grid size")
    if(isNaN(userInput)){
        changeGridSize()
    }
    else if(userInput > 100){
        changeGridSize()
    }
    else{
        createGrid(userInput)
    }
}

function resetGrid(){
   let boxes = Array.from(document.querySelectorAll('.box'))
   boxes.forEach(element => {
        element.classList.remove("box-filled")
   });
}


function generateRandomColor(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)

    return `rgb(${red},${green},${blue})`
}

createGrid(16)