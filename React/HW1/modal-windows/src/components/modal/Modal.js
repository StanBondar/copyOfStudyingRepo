import React from 'react';
import withStyles from 'react-jss';
import '../styles/modal.scss';


class Modal extends React.Component {
    render() {
        const { header, closeButton, text, changeVisibility, modalBodyStyle, modalHeaderStyle } = this.props;
        const closeButton = (
            <div></div>
        );
        return (
            <div className='modalBackground' onClick={changeVisibility}>
                <div className={modalBodyStyle}>
                    <div className={modalHeaderStyle}>
                        <h1>{header}</h1>
                    </div>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}


export default Modal;