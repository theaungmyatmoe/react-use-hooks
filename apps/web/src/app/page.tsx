'use client'
import {useBoolean, useLocalStorage} from "@reactuse/core";

export default function Home() {
    const [value, {toggle}] = useBoolean();
    const [user, setUser] = useLocalStorage('key', {
        name: 'John',
        age: 30,
    })

    console.log(user)

    return (
        <main>
            <h1>{value ? 'true' : 'false'}</h1>
            <button onClick={toggle}>Set true</button>
        </main>
    )
}
