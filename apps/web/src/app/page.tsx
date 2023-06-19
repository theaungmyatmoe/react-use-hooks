'use client'
import {useBoolean} from "@reactuse/core";

export default function Home() {
    const [value, {toggle}] = useBoolean();


    return (
        <main>
            <h1>{value ? 'true' : 'false'}</h1>
            <button onClick={toggle}>Set true</button>
        </main>
    )
}
