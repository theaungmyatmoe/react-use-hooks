import React from 'react';
import PlayGround from "@/components/PlayGround";
import {useBoolean} from "@reactusehooks/core";

const UseBoolean = () => {
    const [value, {setTrue, setFalse, toggle}] = useBoolean();
    return (
        <PlayGround>
            <div>
                <div>Value: {value.toString()}</div>
                <div className="flex gap-x-3 mt-3">
                    <button
                        onClick={setTrue}
                        className=" px-2 py-1 bg-gray-500 text-white rounded dark:bg-gray-700"
                        tabIndex={0}
                    >Set True
                    </button>
                    <button
                        onClick={setFalse}
                        className="px-2 py-1 bg-gray-500 text-white rounded dark:bg-gray-700"
                        tabIndex={0}
                    >Set False
                    </button>
                    <button
                        onClick={toggle}
                        className="px-2 py-1 bg-gray-500 text-white rounded dark:bg-gray-700"
                        tabIndex={0}
                    >Toggle
                    </button>
                </div>
            </div>
        </PlayGround>
    );
};

export default UseBoolean;
