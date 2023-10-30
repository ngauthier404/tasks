import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
            <div>{visible ? "42" : ""}</div>
            <button onClick={() => setVisible(!visible)}>Reveal Answer</button>
        </>
    );
}
