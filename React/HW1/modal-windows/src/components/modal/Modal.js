import React from 'react';
import withStyles from 'react-jss';
import '../styles/modal.scss';
import PropTypes from "prop-types";

class Modal extends React.Component {
    render() {
        const { header, closeButton, text, changeVisibility, modalBodyStyle, modalHeaderStyle, buttons } = this.props;
        const closeButtonElement = (
            <button>Close</button>
        );
        return (
            <div className='modalBackground' onClick={changeVisibility}>
                <div className={modalBodyStyle}>
                    <div className={modalHeaderStyle}>
                        <h1>{header}</h1>
                        {closeButton && <span className="closeButton">&#10008;</span>}
                    </div>
                    <p>{text}</p>
                    <div className="modal-buttons-container">{buttons}</div>
                </div>
            </div>
        )
    }
}

Modal.PropTypes = {
    header: PropTypes.string.required,
    closeButton: PropTypes.bool,
    text: PropTypes.string.required,
    changeVisibility: PropTypes.func.required,
    modalBodyStyle: PropTypes.string,
    modalHeaderStyle: PropTypes.string,
    button: PropTypes.array
}

export default Modal;