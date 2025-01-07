import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }){
    const timer = useRef(); // 타이머
    const dialog = useRef(); // 모달창
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000); // 시간 측정
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000; // 타이머 활성화

    // 타이머 만료
    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    // 타이머 초기화
    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    // 타이머 시작
    function handleStart(){
        // 10밀리초마다 실행됨
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10); // 10밀리초씩 빼기
        }, 10);
    }

    // 타이머 종료
    function handleStop(){
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}