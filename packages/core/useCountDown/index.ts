import {useEffect, useRef, useState} from 'react';


type UseCountDownOptions = {
    interval?: number;
    onStart?: () => void;
    onTick?: (time: number) => void;
    onCompleted?: () => void;
    onStop?: () => void;
}

type UseCountDownResult = {
    count: number;
    start: () => void;
    stop: () => void;
    isStart: boolean;
};

type UseCountDownFn = (time: number | Date, options: UseCountDownOptions) => UseCountDownResult;


export const useCountDown: UseCountDownFn = (time, {
    interval = 1000,
    onStart,
    onTick,
    onCompleted,
    onStop
}) => {
    const [count, setCount] = useState(time instanceof Date ? time.getTime() - Date.now() : time);
    const [isStart, setIsStart] = useState(false);
    const timer = useRef<any>(null);


    const start = () => {
        setIsStart(true);
        if (onStart) {
            onStart();
        }
    }

    const stop = () => {
        setIsStart(false);
        if (onStop) {
            onStop();
        }
    }

    useEffect(() => {
        if (isStart) {
            timer.current = setInterval(() => {
                setCount((count) => {
                    if (count <= 0) {
                        clearInterval(timer.current);
                        return 0;
                    }
                    return count - 1;
                });
                if (onTick) {
                    onTick(count);
                }
            }, interval);
        }
        return () => {
            clearInterval(timer.current);
        }
    }, [isStart]);

    return {count, start, stop, isStart};
};

