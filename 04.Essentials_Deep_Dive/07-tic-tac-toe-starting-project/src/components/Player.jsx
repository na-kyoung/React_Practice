import { useState } from "react";

export default function Player({initialName, symbol}) {
    const [ isEditing, setIsEditing ] = useState(false); // 버튼 상태
    const [ playerName, setPlayerName ] = useState(initialName); // 플레이어 이름

    // 버튼 상태 변경
    function handleEditClick(){
        // setIsEditing(!isEditing);
        // setIsEditing(!isEditing);
        setIsEditing((editing) => !editing);
        // setIsEditing((editing) => !editing);
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
        <li>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}