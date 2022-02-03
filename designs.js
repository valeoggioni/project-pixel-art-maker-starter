// Select color input
const inputColor = document.getElementById('colorPicker');

// Select size input
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');



// When size is submitted by the user, call makeGrid()


function submitGrid(event){
    event.preventDefault();
    event.stopPropagation();
    makeGrid();
    initiateColorChange();
};

//Adding event listener to the submit button 
const userGrid = document.getElementById('sizePicker');
userGrid.addEventListener('submit', submitGrid);

//The function that uses the values 
//in the form to create the table
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

//The function that will fill in or fill out the cells by 
//the click of the user
function initiateColorChange(){
const gridCell = document.querySelectorAll('td');

gridCell.forEach(function(cell) {
    cell.addEventListener('click', function(e) {
        console.log('clicked');
            if (e.target.style.backgroundColor === '') {
                e.target.style.backgroundColor = colorPicker.value;
            } else {
                e.target.style.backgroundColor = '';
        }
    });
});
}
