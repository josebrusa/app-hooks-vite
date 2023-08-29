import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useState } from "react";

export const MemoHook = () => {
    const { counter, increment, reset } = useCounter(0);
    const [show, setShow] = useState(true);

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
                    Counter: <small>{counter}</small>
                </h4>
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
