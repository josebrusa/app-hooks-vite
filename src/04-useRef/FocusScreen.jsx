import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef();
    const handleClick = () => {
        // document.querySelector("#focus").select();
        inputRef.current.select();
    };
    return (
        <>
            <div
                className="d-flex flex-column align-items-center justify-content-center m-2 border border-2 rounded"
                style={{ width: "28rem", height: "16rem" }}
            >
                <h4>Focus Screen</h4>
                <hr />
                <div style={{ width: "75%" }}>
                    <input
                        type="text"
                        placeholder="Ingrese su nombre"
                        className="form-control"
                        ref={inputRef}
                    />
                </div>
                <button className="btn btn-primary mt-2" onClick={handleClick}>
                    Focus
                </button>
            </div>
        </>
    );
};
