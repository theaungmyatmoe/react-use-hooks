import React from 'react';
import {useMounted} from "@reactusehooks/core";

const UseMounted = () => {
    const isMounted = useMounted();
    return (
        <div className="border-1 border-gray-500 rounded-lg p-2 dark:border-gray-300">
            {isMounted ? 'Mounted' : 'Not Mounted'}
        </div>
    );
};

export default UseMounted;
