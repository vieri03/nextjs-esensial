"use client";
import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Increment</button>
        </>
    )
}