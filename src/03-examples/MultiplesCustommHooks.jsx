import { useCounter, useFetch } from "../hooks";
import { Character } from "./Character";
import { LoadingCharacter } from "./LoadingCharacter";

export const MultiplesCustommHooks = () => {
    const { counter, increment, reset, decrement } = useCounter(1);
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
                        disabled={isLoading}
                        onClick={() => increment()}
                    >
                        next
                    </button>
                    <button
                        className="btn btn-secondary"
                        disabled={isLoading}
                        onClick={() => reset()}
                    >
                        reset
                    </button>
                    <button
                        className="btn btn-primary"
                        disabled={isLoading}
                        onClick={() => decrement()}
                    >
                        prev
                    </button>
                </div>
            </div>
        </>
    );
};
