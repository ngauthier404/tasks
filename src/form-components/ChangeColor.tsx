import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const colors: string[] = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "pink",
    "white"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="changeColor" as={Row}>
                {colors.map((option: string) => (
                    <Col key={option}>
                        <Form.Check
                            inline
                            type="radio"
                            name="color"
                            value={option}
                            onChange={(e) => setColor(e.target.value)}
                            id={option}
                        />
                        <div style={{ backgroundColor: option }}>{option}</div>
                    </Col>
                ))}
            </Form.Group>
            <div>
                You have chosen
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </div>
            </div>
        </div>
    );
}
