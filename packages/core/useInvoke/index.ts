import {EffectCallback, useEffect} from "react";

export const useInvoke = (effect: EffectCallback) => {
    useEffect(effect, []);
}
