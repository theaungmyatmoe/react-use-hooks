import React from 'react';
import {useIsMounted} from "@reactusehooks/core";

const UseIsMounted = () => {
    const {isMounted} = useIsMounted();
    return (
        <div className="border-2 border-gray-500 rounded-lg p-2 dark:border-gray-300">
            {isMounted ? 'Mounted' : 'Not Mounted'}
        </div>
    );
};

export default UseIsMounted;
