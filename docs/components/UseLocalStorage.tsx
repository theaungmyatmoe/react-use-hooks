import React from 'react';
import PlayGround from "@/components/PlayGround";
import {useLocalStorage} from "@reactusehooks/core";

const UseLocalStorage = () => {
    const [user, setUser] = useLocalStorage('name', {
        firstName: 'Aung Myat',
        lastName: 'Moe',
    });
    return (
        <PlayGround>
            <div>
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                <button
                    onClick={() => setUser({firstName: 'Aung', lastName: 'Myat'})}
                    className="mt-3 px-4 py-2 bg-green-500 text-white rounded-md dark:bg-gray-800 dark:text-gray-200"
                >Change Name
                </button>
            </div>
        </PlayGround>
    );
};

export default UseLocalStorage;
