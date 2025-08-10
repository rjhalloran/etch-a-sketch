let gridSquares = 16;

function createGrid(sideSquares) {
    const container = document.querySelector("#container");

    const grid = document.createElement('div');
    grid.className = "grid";
    grid.id = "grid";

    for (let i = 1; i < sideSquares + 1; i++) {
        let row = document.createElement('div');
        row.className = "row";
        row.id = "row" + i

        for(let j = 1; j < sideSquares + 1; j++) {
            let box = document.createElement('div');
            box.className = "box";
            box.id = "box" + j
            row.appendChild(box);
        }

        grid.appendChild(row);
    };

    container.appendChild(grid);

    const boxes = document.querySelectorAll('.box')

    function changeBackground() {
        const blackMode = document.querySelector('#black');
        const colourMode = document.querySelector('#colour');
        
        if (blackMode.checked) {
            this.style.backgroundColor = "black";
        } else if (colourMode.checked) {
            const r = Math.floor(Math.random()*256);
            const g = Math.floor(Math.random()*256);
            const b = Math.floor(Math.random()*256);
            console.log(r, g, b);
            this.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        };
    };
        
    boxes.forEach(box => box.addEventListener('mouseover', changeBackground))

    const clear = document.querySelector('#clear')

    function resetBackground(object) {
        object.style.backgroundColor = "lightgray";
    }

    clear.addEventListener('click', () => {
        boxes.forEach(box => resetBackground(box));
    });

};

createGrid(gridSquares)


const resize = document.querySelector('#resize');

resize.addEventListener('click', () => {
    let updatedGridSquares = Math.floor(document.querySelector("#new-size").value);
    console.log(updatedGridSquares);

    const container = document.querySelector("#container");
    
    const grid = document.querySelector('#grid');

    if (container.contains(grid)) {
        container.removeChild(grid);
    }
    createGrid(updatedGridSquares);
});