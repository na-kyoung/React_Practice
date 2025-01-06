import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName }) {
    console.log('Player Start!');
    const [ isEditing, setIsEditing ] = useState(false); // 버튼 상태
    const [ playerName, setPlayerName ] = useState(initialName); // 플레이어 이름

    // 버튼 상태 변경
    function handleEditClick(){
        // setIsEditing(!isEditing);
        // setIsEditing(!isEditing);
        setIsEditing((editing) => !editing);
        // setIsEditing((editing) => !editing);

        if(isEditing){ // 수정됐을 때 App 컴포넌트에 심볼,이름 보내기
            onChangeName(symbol, playerName);
        }
    }

    // 플레이어 이름 변경
    function handleChange(event) {
        console.log(event.target.value);
        setPlayerName(event.target.value);
    }

    // 버튼 상태에 따라 UI 변경 및 플레이어 이름 수정
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if(isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}