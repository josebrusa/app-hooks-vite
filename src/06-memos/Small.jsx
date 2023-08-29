import PropTypes from "prop-types";
import React from "react";

export const Small = React.memo(({ value }) => {
    console.log("me volvi a dibujar :(");
    return <small>{value}</small>;
});

Small.propTypes = {
    value: PropTypes.number.isRequired,
};
