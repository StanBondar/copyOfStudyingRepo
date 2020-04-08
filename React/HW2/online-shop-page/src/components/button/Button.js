import React from "react";
import "./buttons.scss";
import PropTypes from "prop-types";

class Button extends React.Component {
  render() {
    const { text, action, style } = this.props;
    return (
        <button className={style} onClick={action}>
          {text}
        </button>
    );
  }
}

export default Button;
