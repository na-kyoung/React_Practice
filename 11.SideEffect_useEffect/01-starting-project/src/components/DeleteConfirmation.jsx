import { useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  console.log('DeleteConfirmation START');

  useEffect(() => {
    // 3초 뒤 자동 삭제
    console.log('Timer Set!');
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    // 컴포넌트가 사라지기 직전에 실행
    return () => {
      console.log('Cleaning Up Timer')
      clearTimeout(timer);
    }
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
