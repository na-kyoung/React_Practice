export default function GameBoard({ onSelectSquare, board }) {
    console.log('GameBoard Start!');
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; // 원본 배열 복제
    //         // const updateBoard = [...prevGameBoard];
    //         updateBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updateBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button 
                                    onClick={() => onSelectSquare(rowIndex, colIndex)} 
                                    disabled={playerSymbol !== null}
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}