import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }){
    const timer = useRef(); // 타이머
    const [timerStarted, setTimerStarted] = useState(false); // 타이머 시작
    const [timerExpired, setTimerExpired] = useState(false); // 타이머 종료

    function handleStart(){
        timer.current = setTimeout(() => {
            setTimerExpired(true); // 타이머 종료 후 실행
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current); // 타이머 종료
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    );
}