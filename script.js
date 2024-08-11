const board = document.querySelector('.board')

for(let col = 0; col <15; col++){
    const column = document.createElement('div')
    column.setAttribute("class",'col')
    for(let box = 0; box < 15; box++){
        const box = document.createElement('div')
        box.setAttribute('class','box')
        column.appendChild(box)
    }
    board.appendChild(column)
}