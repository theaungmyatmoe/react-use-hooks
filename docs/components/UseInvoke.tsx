import React, {useState} from 'react';
import {useInvoke} from "@reactusehooks/core";
import PlayGround from "@/components/PlayGround";

const UseInvoke = () => {
    const [isInvoked, setInvoke] = useState(false)
    useInvoke(() => {
        setInvoke(true)
    });

    return (
        <PlayGround>
            <div>isInvoked: {isInvoked ? 'true' : 'false'}</div>
        </PlayGround>
    );
};

export default UseInvoke;
