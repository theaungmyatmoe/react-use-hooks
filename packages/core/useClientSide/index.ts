import {useEffect, useState} from "react";

/**
 * @name useClientSide
 * @description Returns true if the code is running on the client side, false otherwise.
 * @returns {boolean}
 * @constructor
 * @example
 * const isClientSide = useClientSide();
 * if (isClientSide) {
 * // do something
 * }
 */
export const useClientSide = () => {
    const [isClientSide, setIsClientSide] = useState(false);
    useEffect(() => {
        setIsClientSide(typeof window !== 'undefined');
    }, []);
    return isClientSide;
}
