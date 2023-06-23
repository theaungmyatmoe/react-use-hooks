import {useEffect, useRef} from "react";


/**
 * @name useMounted
 * @description Returns whether the component is mounted or not
 * @returns {boolean}
 * @example
 * const isMounted = useMounted();
 * if (isMounted) {
 *  // do something
 *  }
 */
export const useMounted = () => {
    const isMounted = useRef(false);
    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);
    return isMounted.current;
}
