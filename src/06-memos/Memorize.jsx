import React from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";
import { useState } from "react";
import { useMemo } from "react";

const heavyStuff = (iteracionNumber = 100) => {
    for (let i = 0; i < iteracionNumber; i++) {
        console.log("Ahi vamos...");
    }

    return `${iteracionNumber} cantidad de iteraciones`;
};

export const Memorize = () => {
    const { counter, increment, reset } = useCounter(10);
    const [show, setShow] = useState(true);

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <div
                className="d-flex flex-column justify-content-center align-items-center m-4 border border-2 rounded "
                style={{
                    width: "14rem",
                    height: "16rem",
                }}
            >
                <h4>
                    Counter: <Small value={counter} />
                </h4>
                <h4 className="text-center">{memorizeValue}</h4>
                <div>
                    <button
                        className="btn btn-primary"
                        onClick={() => increment()}
                    >
                        +
                    </button>
                    <button className="btn btn-primary" onClick={() => reset()}>
                        Reset
                    </button>
                </div>
                <button
                    className="btn btn-outline-primary m-4"
                    onClick={() => setShow(!show)}
                >
                    Show/Hide {JSON.stringify(show)}
                </button>
            </div>
        </>
    );
};
