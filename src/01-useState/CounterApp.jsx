import { useState } from "react";

export const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1: 0,
        counter2: 10,
        counter3: 20,
    });
    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <div
                className="d-flex flex-column align-items-center justify-content-center m-2 border border-2 rounded"
                style={{ width: "14rem", height: "16rem" }}
            >
                <h3>useState</h3>
                <p className="px-4 mx-4">Counter : {counter1} </p>
                <p className="px-4 mx-4">Counter : {counter2} </p>
                <p className="px-4 mx-4">Counter : {counter3} </p>
                <hr />
                <button
                    className="btn btn-primary"
                    onClick={() =>
                        setCounter({
                            ...state,
                            counter1: counter1 + 1,
                            counter2: counter2 + 2,
                        })
                    }
                >
                    +
                </button>
            </div>
        </>
    );
};
