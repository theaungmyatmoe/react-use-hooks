import React from 'react';
import {useUnMounted} from "@reactusehooks/core";

const UseUnMounted = () => {
    useUnMounted(() => {
        console.log("unmounted");
    });


    return (
        <div>
            <h1>UseUnMounted</h1>
        </div>
    );
};

export default UseUnMounted;
