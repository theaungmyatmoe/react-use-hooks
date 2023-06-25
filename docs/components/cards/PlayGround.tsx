import React, {PropsWithChildren} from 'react';

const PlayGround = ({children}: Required<PropsWithChildren>) => {
    return (
        <div className="border border-gray-400 rounded-md p-4 dark:border-gray-700 mt-4">
            {children}
        </div>
    );
};

export default PlayGround;
