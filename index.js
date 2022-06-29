const container = document.getElementById("container");

function makeGrid(rows,cols){
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-cols',cols);
    for(let i = 0; i < (rows*cols) ; i++) {
        let squares = document.createElement('div');
        container.appendChild(squares).className = 'grid-items';
        }
    
    };
makeGrid(16,16);


const cells = document.querySelectorAll('.grid-items');
const randColor = function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

cells.forEach((cell) => {
    cell.addEventListener('click', function changeColor(){
        cell.style.backgroundColor = randColor() ;
        
    })

    const button = document.getElementById('clear');
    button.addEventListener('click',function clean(){
        cell.style.backgroundColor = 'white';
    });
});



    
    































