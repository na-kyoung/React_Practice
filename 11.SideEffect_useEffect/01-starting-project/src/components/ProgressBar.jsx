import { useEffect, useState } from "react";

export default function ProgressBar ({ timer }){
    const [remainingTime, setRemainingTime] = useState(timer);

    // 3초 프로그레스바 표시
    useEffect(() => {
        const interval = setInterval(() => {
        console.log('INTERVAL');
        setRemainingTime(prevTime => prevTime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <progress value={remainingTime} max={timer} />
    );
}