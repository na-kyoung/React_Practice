import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref){
    const dialog = useRef();

    const userLost = remainingTime <= 0; // 승패여부
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2); // 남은 시간
    const score = Math.round((1 - remainingTime / (targetTime * 1000))* 100); // 점수

    // 외부 컴포넌트에서 접근할 수 있음
    useImperativeHandle(ref, () => {
        return {
            // 모달창 띄우기
            open(){
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your Score : {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
})

export default ResultModal;