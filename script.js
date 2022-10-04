const setupGameBoard = () => {
  const body = document.querySelector('body') ;
  const board = document.createElement('div');
  board.classList.add('board') ;
  body.appendChild(board);
  const gameON = gameOn();
  for(let i=0 ; i<9 ; i++){
    const button = document.createElement('button');
    button.classList.add(`item${i+1}`) ;
    button.addEventListener('click', gameON ) ;
    board.appendChild(button);
  }
}

function gameOn(){
  let i = 0 ;
  let gameRecord = [ 0,0,0,0,0,0,0,0 ];
    return function(e){
      if( e.target.classList[1] !== undefined) return;
        if(i%2){
          markedPlayer2(e);
          gameRecord[ (e.target.classList[0][4]-'0')-1 ] = 2 ;
          // console.log(gameRecord) ;
          i++ ;
        }else{
          markedPlayer1(e);
          gameRecord[ (e.target.classList[0][4]-'0')-1 ] = 1 ;
          // console.log(gameRecord) ;
          i++ ;
        }
        judge(gameRecord);
      }
}

function judge(gameRecord){
  let player1 = [] ;
  let player2 = [] ;
  gameRecord.forEach((item, i) => {
    if(item === 1) player1.push(i) ;
    else if (item === 2) player2.push(i) ;
  });
  console.log(player1, player2) ;
  const winningMethod = [ [0,1,2], [2,5,8], [6,7,8], [0,3,6], [0,4,8], [2,4,6], [3,4,5], [1,4,7] ];
  for(let i=0 ; i<8 ; i++){
    let check = [0,0] ;
    for(let j=0 ; j<3 ; j++){
      if( player1.includes(winningMethod[i][j]) ) check[0]++ ;
      if( player2.includes(winningMethod[i][j]) ) check[1]++ ;
    }
    if(check.includes(3)){
      console.log(`winner is player${check.indexOf(3)+1}`) ;
      resetGame(check.indexOf(3)+1) ;
      break ;
    }
  }
}

function resetGame(winner){
  const winnerNode = document.createElement('h1') ;
  const body = document.querySelector('body');
  winnerNode.textContent = `Player${winner} wins!`
  body.appendChild(winnerNode) ;
  setTimeout(function(){
    // const board = document.querySelector('.board');
    // board.remove();
    body.textContent = '' ;
    setupGameBoard() ;
  }, 1500) ;
}

setupGameBoard();

function markedPlayer1(e){
  e.target.classList.add('markedPlayer1') ;
  // console.log(e.target.classList[0][4]) ;
}
function markedPlayer2(e){
  e.target.classList.add('markedPlayer2') ;
  // console.log(e.target.classList[0][4]) ;
}
