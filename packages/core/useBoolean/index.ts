import {useState} from 'react'

export type UseBooleanFn = (initial?: boolean) => [boolean, UseBooleanActions]
export type UseBooleanActions = {
    setTrue: () => void
    setFalse: () => void
    toggle: () => void
}

export const useBoolean: UseBooleanFn = (initial = false) => {
    const [value, setValue] = useState(initial)
    const setTrue = () => setValue(true)
    const setFalse = () => setValue(false)
    const toggle = () => setValue((prev) => !prev)

    return [value, {setTrue, setFalse, toggle}]
}
