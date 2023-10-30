import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

interface ValueProps {
    dhValue: number;
    setDhValue: (newDhValue: number) => void;
}

function Doubler(props: ValueProps): JSX.Element {
    return (
        <Button onClick={() => props.setDhValue(2 * props.dhValue)}>
            Double
        </Button>
    );
}

function Halver(props: ValueProps): JSX.Element {
    return (
        <Button onClick={() => props.setDhValue(0.5 * props.dhValue)}>
            Halve
        </Button>
    );
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler
                dhValue={dhValue}
                setDhValue={(newDhValue) => setDhValue(newDhValue)}
            ></Doubler>
            <Halver
                dhValue={dhValue}
                setDhValue={(newDhValue) => setDhValue(newDhValue)}
            ></Halver>
        </div>
    );
}
