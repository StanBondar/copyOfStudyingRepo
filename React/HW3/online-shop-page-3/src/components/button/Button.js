import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
    const { text, action, style } = props;
    return (
        <button className={style} onClick={action}>
          {text}
        </button>
    );
}

export default Button;
