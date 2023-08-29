import PropTypes from "prop-types";
import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";

export const Character = ({ name, species, image }) => {
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect();
        setBoxSize({
            width,
            height,
        });
    }, [name]);
    return (
        <div className="d-flex flex-column align-items-center">
            <img
                style={{ width: "4rem", height: "4rem" }}
                src={image}
                alt={name}
            />
            <p>{species}</p>
            <p ref={pRef}>{name}</p>
            <code>{JSON.stringify(boxSize)}</code>
        </div>
    );
};

Character.propTypes = {
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
