import {useEffect, useState} from "react";
import {useIsMounted} from "../useIsMounted";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
    const {isMounted} = useIsMounted()

    if (!isMounted) {
        return [initialValue, () => {
        }] as const
    }
    const [storedValue, setStoredValue] = useState<T>(() => {
            try {
                const item = window.localStorage.getItem(key)
                return item ? JSON.parse(item) : initialValue
            } catch (error) {
                console.log(error)
                return initialValue
            }
        }
    )

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        try {
            const item = JSON.stringify(storedValue)
            window.localStorage.setItem(key, item)
        } catch (error) {
            console.log(error)
        }
    }, [key, storedValue])

    return [storedValue, setValue] as const
}
