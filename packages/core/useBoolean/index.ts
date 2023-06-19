import {useState} from 'react'

type UseBooleanFn = () => [boolean, UseBooleanActions]
type UseBooleanActions = {
    setTrue: () => void
    setFalse: () => void
    toggle: () => void
}

export const useBoolean: UseBooleanFn = () => {
    const [value, setValue] = useState(false)
    const setTrue = () => setValue(true)
    const setFalse = () => setValue(false)
    const toggle = () => setValue((prev) => !prev)

    return [value, {setTrue, setFalse, toggle}]
}
