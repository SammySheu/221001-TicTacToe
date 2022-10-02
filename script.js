


const setupGameBoard = () => {
  const board = document.querySelector('.board');
  const buttonClick = gameOn();
  for(let i=0 ; i<9 ; i++){
    const button = document.createElement('button');
    button.classList.add(`.item${i+1}`) ;
    button.addEventListener('click', buttonClick ) ;
    board.appendChild(button);

  }
}

function gameOn(){
  let i = 0 ;
  // if(i%2){
    // console.log(`i=${i}`) ;
    return function(e){
      if(i%2){
        markedPlayer2(e);
        console.log(`i=${i}`) ;
        i++ ;
      }
      else{
        markedPlayer1(e);
        console.log(`i=${i}`) ;
        i++ ;
      }
    }
  // }
  // else{
  //   console.log(`i=${i}`) ;
  //   return function(e){
  //     console.log(`i=${i}`) ;
  //     // markedPlayer1(e);
  //     i++ ;
  //   }
  // }
}

setupGameBoard();
function markedFunction(){
  console.log('HelloThere');
}

function markedPlayer1(e){
  e.target.classList.add('markedPlayer1') ;
}
function markedPlayer2(e){
  e.target.classList.add('markedPlayer2') ;
}
