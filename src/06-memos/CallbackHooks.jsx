import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";
import { useCallback } from "react";
import { useEffect } from "react";

export const CallbackHooks = () => {
    const [counter, setCounter] = useState(0);

    const incrementFather = useCallback((value) => {
        setCounter((i) => i + value);
    }, []);

    const resetFather = useCallback(() => {
        setCounter(0);
    }, []);

    useEffect(() => {}, [incrementFather, resetFather]);

    // const incrementFather = () => {
    //     setCounter(counter + 1);
    // };

    return (
        <>
            <div
                className="d-flex flex-column justify-content-center
            align-items-center m-4 border border-2 rounded "
                style={{
                    width: "18rem",
                    height: "16rem",
                }}
            >
                <h4 className="text-center">useCallback Hook: {counter}</h4>
                <hr />
                <ShowIncrement
                    increment={incrementFather}
                    reset={resetFather}
                />
            </div>
        </>
    );
};
