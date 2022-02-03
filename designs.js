// Select color input
const inputColor = document.getElementById('colorPicker');

// Select size input
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');



// When size is submitted by the user, call makeGrid()
// sizePicker.addEventListener('submit', function logSubmit(event){
//     event.preventDefault();
//     makeGrid();
// });

function submitGrid(event){
    makeGrid();
    event.preventDefault();
};

const userGrid = document.getElementById('sizePicker');
userGrid.addEventListener('submit', submitGrid);

function makeGrid() {
    pixelCanvas.innerHTML = '';
    let canvas = document.getElementById('pixelCanvas');
    const height = Number(inputHeight.value);
    const width = Number(inputWidth.value);
    for (let i=0; i<height; i++){
        //creates the number of rows defined by the user
        let newRow = document.createElement('tr');
        canvas.appendChild(newRow);

        for (let x=0; x<width; x++){
            //creates the number of cells defined by the user
            let newCell = document.createElement('td');
            newRow.appendChild(newCell);
        }
    }
};

console.log(makeGrid);

const gridCell = document.querySelectorAll('td');

gridCell.forEach(function(cell) {
    cell.addEventListener('click', function(e) {
        if (e.target.style.backgroundColor === '') {
            e.target.style.backgroundColor = colorPicker.value;
        } else {
            e.target.style.backgroundColor = '';
        }
    });
});
