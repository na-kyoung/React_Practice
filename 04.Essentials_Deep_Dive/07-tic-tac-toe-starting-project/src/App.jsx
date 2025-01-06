import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/Gameboard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

// 초기 게임판
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// 심볼 변경 (X/O)
function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  console.log('App Start!');
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2'
  });

  const activePlayer = deriveActivePlayer(gameTurns);

  // 게임판 생성 (복사본 사용)
  let gameBoard = [...initialGameBoard.map(array => [...array])];
  for(const turn of gameTurns){
      const { square, player } = turn; // Object destructuring
      const { row, col } = square; // Object destructuring

      gameBoard[row][col] = player;
  }

  // 승리자 체크
  let winner;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(
      firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol
    ){
      winner = players[firstSquareSymbol]; // 심볼로 승리자 이름 가져오기
    }
  }

  // 무승부 체크
  const hasDraw = gameTurns.length === 9 && !winner;

  // 게임판 업데이트
  function handleSelectSquare(rowIndex, colIndex){
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: {row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ];

      return updatedTurns;
    });
  }

  // 게임 재시작
  function handleRestart(){
    setGameTurns([]);
  }

  // 플레이어 이름 수정
  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers, 
        [symbol]: newName
      };
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App;
