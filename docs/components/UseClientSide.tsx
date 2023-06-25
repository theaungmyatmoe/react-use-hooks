import React from 'react';
import {useClientSide} from "@reactusehooks/core";
import PlayGround from "@/components/cards/PlayGround";

const UseClientSide = () => {
    const isClientSide = useClientSide();
    return (
        <PlayGround>
            {isClientSide ? 'Client Side' : 'Server Side'}
        </PlayGround>
    );
};

export default UseClientSide;
