'use client'

import React, { useState } from "react";

const Button = () => {
    'use memo'
    
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount((c) => c + 1);
    }

    return (
        <>
            <button onClick={onClick}>
                Clicked: {count} times!
            </button>
        </>
    );
}

export default Button;
