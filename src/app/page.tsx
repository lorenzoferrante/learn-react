'use client'

import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount((c) => c + 1);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">     
    <button onClick={onClick}>
      Clicked: {count} times!
    </button>
    </div>
  );
}
