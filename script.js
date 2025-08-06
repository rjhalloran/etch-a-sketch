let gridSquares = 16;

function createGrid(sideSquares) {
    const container = document.querySelector("#container")
    
    for(let i = 1; i < sideSquares + 1; i++) {
        let row = document.createElement('div');
        row.className = "row";
        row.id = "row" + i

        for(let j = 1; j < sideSquares + 1; j++) {
            let box = document.createElement('div');
            box.className = "box";
            box.id = "box" + j
            row.appendChild(box);
        }

        container.appendChild(row)
    }
}

createGrid(gridSquares)

const boxes = document.querySelectorAll('.box')

function changeBackground() {
    this.style.backgroundColor = "black";
}

boxes.forEach(box => box.addEventListener('mouseover', changeBackground))

const clear = document.querySelector('#clear')

function resetBackground(object) {
    object.style.backgroundColor = "lightgray";
}

clear.addEventListener('click', () => {
    boxes.forEach(box => resetBackground(box));
});


const resize = document.querySelector('#resize');

resize.addEventListener('click', () => {
    let updatedGridSquares = document.querySelector("#new-size").value;
    console.log(updatedGridSquares);
    createGrid(updatedGridSquares);
});