import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <h6>Attempts left: {attempts}</h6>
            <Form.Control
                type="number"
                value={request}
                onChange={(e) => setRequest(e.target.value)}
            />
            <Button
                disabled={attempts == 0}
                onClick={() => setAttempts(attempts - 1)}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    const x = Number(request);
                    if (!isNaN(x)) {
                        setAttempts(attempts + x);
                    }
                }}
            >
                Gain
            </Button>
        </div>
    );
}
