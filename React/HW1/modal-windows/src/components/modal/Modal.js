import React from 'react';
import withStyles from 'react-jss';
import '../styles/modal.scss';


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


export default Modal;