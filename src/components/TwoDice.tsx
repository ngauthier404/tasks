import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1, setD1] = useState<number>(1);
    const [d2, setD2] = useState<number>(2);

    return (
        <>
            <div>Two Dice</div>
            <span data-testid="left-die">{d1}</span>
            <button onClick={() => setD1(d6())}>Roll Left</button>
            <span data-testid="right-die">{d2}</span>
            <button onClick={() => setD2(d6())}>Roll Right</button>
            <span>{d1 == d2 ? (d1 == 1 ? "Lose" : "Win") : ""}</span>
        </>
    );
}
