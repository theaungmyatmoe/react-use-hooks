import React from 'react';
import PlayGround from "@/components/cards/PlayGround";
import {useCountDown} from "@reactusehooks/core";

const UseCountDown = () => {
    const {count, start, stop} = useCountDown(
        new Date(Date.now() + 1000),
        {
            interval: 1000,
        });

    return (
        <PlayGround>
            <div className="text-2xl font-bold">Count: {count}</div>
            <div className="flex gap-x-4">
                <button
                    onClick={() => start()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Start
                </button>
                <button
                    onClick={() => stop()}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Stop
                </button>
            </div>
        </PlayGround>
    );
};

export default UseCountDown;
