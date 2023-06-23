import {useRef} from "react";
import {useInvoke} from "../useInvoke";

export const useUnMounted = (fn: () => void) => {
    const fnRef = useRef(fn)
    useInvoke(() => fnRef.current())
}
