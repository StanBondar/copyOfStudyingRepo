import React from 'react';
import '../styles/buttons.scss';
import PropTypes from "prop-types";

class Button extends React.Component{
    render(){
        const {text, action, style} = this.props;
        
        return(
            <>
            <button className={style} onClick={action}>{text}</button>
            </>
        )
    }
}

// string, bool, func, object, array, symbol, number
Button.propTypes = {
    text: PropTypes.string.required,
    action: PropTypes.func.required,
    style: PropTypes.string.required
}

export default Button;