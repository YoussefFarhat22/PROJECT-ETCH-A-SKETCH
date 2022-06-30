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

//Set random color (rainbow)
const randColor = function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

cells.forEach((cell) => {
    cell.addEventListener('mouseover', function changeColor(){
        cell.style.backgroundColor = randColor() ;
        
    })


    const button = document.getElementById('clear');
    button.addEventListener('click',function clean(){
        cell.style.backgroundColor = 'white';
    });
});



    
    



//create new grid
const btn = document.getElementById('numberOfgrid');
btn.addEventListener('click',()=>{
     const n = prompt('Enter number of squares','64');
     if(n>64){
        prompt('Enter a number under 64 please!!',)
     }
     createNewGrid(n);
     


     
});

function createNewGrid(n){
    let grids = container.querySelectorAll('div');
    grids.forEach(grid=>
        grid.remove()
        );
       makeGrid(n,n);
    let squares2 = document.querySelectorAll('.grid-items')
    squares2.forEach((square2)=>{
        square2.addEventListener('mouseover',()=>
        square2.style.backgroundColor = randColor());

        const button = document.getElementById('clear');
        button.addEventListener('click',function clean(){
            square2.style.backgroundColor = 'white';
        });





    });
    


       

    }



    




    
    































