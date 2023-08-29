import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHooks = () => {
    const { counter, increment, reset, decrement } = useCounter();
    return (
        <>
            <div
                className="d-flex flex-column align-items-center justify-content-center m-2 border border-2 rounded"
                style={{ width: "14rem", height: "16rem" }}
            >
                <h3>Custom Hook</h3>
                <p className="px-4 mx-4">Counter: {counter}</p>
                <hr />
                <div>
                    <button
                        onClick={() => increment(1)}
                        className="btn btn-primary"
                    >
                        +
                    </button>
                    <button onClick={() => reset()} className="btn btn-primary">
                        Reset
                    </button>
                    <button
                        onClick={() => decrement(5)}
                        className="btn btn-primary"
                    >
                        -
                    </button>
                </div>
            </div>
        </>
    );
};
