import React from 'react';
import PlayGround from "@/components/cards/PlayGround";
import {useLocalStorage} from "@reactusehooks/core";

const UseLocalStorage = () => {
    const [user, setUser] = useLocalStorage('name', {
        firstName: 'Aung Myat',
        lastName: 'Moe',
    });
    const [range, setRange] = useLocalStorage('range', 0);
    return (
        <PlayGround>
            <div>
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                <p>Range: {range}</p>
                <button
                    onClick={() => setUser({firstName: 'Aung', lastName: 'Myat'})}
                    className="mt-3 px-4 py-2 bg-green-500 text-white rounded-md dark:bg-gray-800 dark:text-gray-200"
                >Change Name
                </button>
                <input
                    onChange={(e) => setRange(parseInt(e.target.value))}
                    type="range"
                    min={0}
                    max={100}
                    className="mt-3 w-full dark:bg-gray-800"
                />
            </div>
        </PlayGround>
    );
};

export default UseLocalStorage;
