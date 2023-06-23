import {useRef} from "react";
import {useEffectOnce} from "../useEffectOnce";

export const useUnMounted = (fn: () => void) => {
    const fnRef = useRef(fn)
    useEffectOnce(() => fnRef.current())
}
