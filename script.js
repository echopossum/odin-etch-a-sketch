//Element Declarations
const resetButton = document.createElement('button')
resetButton.textContent = 'Reset'
resetButton.classList.add('button')
resetButton.addEventListener('click',resetGrid)
document.body.appendChild(resetButton)

const resize = document.createElement('button')
resize.textContent = 'Change Size'
resize.classList.add('button')
document.body.appendChild(resize)

const board = document.createElement('div')
board.classList.add('board')
document.body.appendChild(board)

board.addEventListener('mouseover',(e)=>{
    if(e.target.classList.contains("box")){
        e.target.classList.add('box-filled')
    }
})



resize.addEventListener('click',changeGridSize)

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


createGrid(13)