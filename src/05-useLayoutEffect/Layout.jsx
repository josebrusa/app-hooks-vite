import { useCounter, useFetch } from "../hooks";

import { Character } from "../03-examples/Character";
import { LoadingCharacter } from "../03-examples/LoadingCharacter";

export const Layout = () => {
    const { counter, increment, reset, decrement } = useCounter(10);
    const { data, isLoading, hasError } = useFetch(
        `https://rickandmortyapi.com/api/character/${counter}`
    );
    const { name, image, species } = data;

    return (
        <>
            <div
                className="d-flex flex-column align-items-center justify-content-center m-2 border border-2 rounded"
                style={{ width: "28rem", height: "16rem" }}
            >
                <h4>Rick and Morty Character</h4>
                {isLoading ? (
                    <LoadingCharacter />
                ) : (
                    <Character name={name} species={species} image={image} />
                )}

                <div className="d-flex">
                    <button
                        className="btn btn-primary"
                        onClick={() => increment()}
                    >
                        next
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => reset()}
                    >
                        reset
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => decrement()}
                    >
                        prev
                    </button>
                </div>
            </div>
        </>
    );
};
