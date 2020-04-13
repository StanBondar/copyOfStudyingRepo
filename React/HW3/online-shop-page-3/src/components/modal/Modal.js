import React from "react";
import "./modal.scss";
import propTypes from "prop-types";
import Button from "../button/Button";

class Modal extends React.Component {
  render() {
    const {
      header,
      text,
      modalBodyStyle,
      modalHeaderStyle,
    buttons
    } = this.props;
    
    return (
      <div className="modalBackground">
        <div className={modalBodyStyle}>
          <div className={modalHeaderStyle}>
            <h1>{header}</h1>
          </div>
          <p>{text}</p>
          <div className="modal-buttons-container">
                {buttons}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
