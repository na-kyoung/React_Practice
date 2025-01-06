export default function Log({ turns }) {
    console.log('Log Start!');
    
    return (
        <ol id="log">
            {turns.map((turn) => (
            <li key={`${turn.square.row}${turn.square.col}`}>
                {turn.player} selected {turn.square.row},{turn.square.col}
            </li>
        ))}
        </ol>
    );
}