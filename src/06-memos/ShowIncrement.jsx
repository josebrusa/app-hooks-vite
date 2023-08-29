import React from "react";
import PropType from "prop-types";

export const ShowIncrement = React.memo(({ increment, reset }) => {
    console.log("otra vez me ejecute :(");

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => {
                    increment(5);
                }}
            >
                incrementar
            </button>
            <button
                className="btn btn-secondary mt-2"
                onClick={() => {
                    reset(0);
                }}
            >
                reset
            </button>
        </>
    );
});

ShowIncrement.propTypes = {
    increment: PropType.func.isRequired,
    reset: PropType.func.isRequired,
};
