import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Valentine's Day: Feb 14th
 * St. Paddy's Day: Mar 17th
 * Earth Day: Apr 22nd
 * Halloween: Oct 31st
 * Christmas: Dec 25th
 */
export type Holiday = "❤️" | "🎃" | "🍀" | "🎄" | "🌎";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("❤️");

    function advanceByAlphabet(h: Holiday): Holiday {
        switch (h) {
            case "🎄":
                return "🌎";
            case "🌎":
                return "🎃";
            case "🎃":
                return "🍀";
            case "🍀":
                return "❤️";
            case "❤️":
                return "🎄";
        }
    }

    function advanceByYear(h: Holiday): Holiday {
        switch (h) {
            case "❤️":
                return "🍀";
            case "🍀":
                return "🌎";
            case "🌎":
                return "🎃";
            case "🎃":
                return "🎄";
            case "🎄":
                return "❤️";
        }
    }

    return (
        <>
            <div>Holiday: {holiday}</div>
            <button onClick={() => setHoliday(advanceByAlphabet(holiday))}>
                Advance by Alphabet
            </button>
            <button onClick={() => setHoliday(advanceByYear(holiday))}>
                Advance by Year
            </button>
        </>
    );
}
