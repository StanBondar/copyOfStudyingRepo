import React from "react";
import withStyles from "react-jss";
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
    //   action
    buttons
    } = this.props;
    // debugger;
    
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

// Modal.propTypes = {
//     header: propTypes.string.isRequired,
//     text: propTypes.string.isRequired,
//     changeVisibility: propTypes.func.isRequired,
//     modalBodyStyle: propTypes.string,
//     modalHeaderStyle: propTypes.string,
//     button: propTypes.array
// }

export default Modal;
