import withStyles from 'react-jss';

const modalStyles = {
    modalBackground: {
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        width: "100%",
        height: "100vw",
        "background-color": "#9e9e9e75",
        position: "absolute"
    },
    modalBody: {
        width: "50%",
        "min-height": "fit-content",
        height: "200px",
        "background-color": "red",
        color: 'white'
    }
};

export default modalStyles;