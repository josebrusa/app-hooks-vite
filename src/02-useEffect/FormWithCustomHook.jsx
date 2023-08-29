import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    const { username, email, password, formState, onInputChange, onResetForm } =
        useForm({
            username: "",
            email: "",
            password: "",
        });

    // const { username, email, password } = formState;

    return (
        <>
            <div
                className="d-flex flex-column align-items-center justify-content-center m-2 border border-2 rounded"
                style={{ width: "28rem", height: "16rem" }}
            >
                <h4>Formulario Custom Hook</h4>
                <div style={{ width: "75%" }}>
                    <input
                        type="text"
                        className="form-control m-2 p-2"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={onInputChange}
                    />
                    <input
                        type="email"
                        className="form-control m-2 p-2"
                        placeholder="jose@test.com"
                        name="email"
                        value={email}
                        onChange={onInputChange}
                    />
                    <input
                        type="password"
                        className="form-control m-2 p-2"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    />
                </div>
                <button onClick={onResetForm} className="btn btn-secondary">
                    Borrar
                </button>
            </div>
        </>
    );
};
