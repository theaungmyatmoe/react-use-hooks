import React, {useEffect} from 'react';
import {useMounted} from "@reactusehooks/core";
import PlayGround from "@/components/cards/PlayGround";

const UseMounted = () => {
    const isMounted = useMounted();
    return (
        <PlayGround>
            <div>Is mounted: {isMounted ? 'Yes' : 'No'}</div>
        </PlayGround>
    );
};

export default UseMounted;
