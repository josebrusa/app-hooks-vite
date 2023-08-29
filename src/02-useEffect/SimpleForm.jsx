import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "jose",
        email: "jose@test.com",
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <>
            <div
                className="d-flex flex-column align-items-center justify-content-center m-2 border border-2 rounded"
                style={{ width: "28rem", height: "16rem" }}
            >
                <h4>Formulario Simple</h4>
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
                </div>

                {username === "jose2" && <Message />}
            </div>
        </>
    );
};
