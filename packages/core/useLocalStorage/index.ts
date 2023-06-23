import {useEffect, useState} from "react";


/**
 * @name useLocalStorage
 * @description Persist a value in local storage
 * @param key - Key of local storage
 * @param initialValue - Initial value
 * @returns [storedValue, setValue] - storedValue is the value stored in local storage, setValue is a function to update the value
 * @example
 * const [value, setValue] = useLocalStorage('user', 'Mg Mg')
 * setValue('Aung Aung')
 * console.log(value) // Aung Aung
 */
export const useLocalStorage = <T>(key: string, initialValue: T) => {

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
