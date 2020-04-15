import {createUseStyles} from "react-jss";

const buttonStyle = createUseStyles({
    button: {
        width: 150,
        height: 50,
        border: "none",
        borderRadius: 5,
        cursor: "pointer",
        outline: "none"
    },
    firstButton: {
        backgroundColor: "red"
    },
    secondButton: {
        backgroundColor: "green",
        transition: "all 0.3s ease-in",
        "&:hover" : {
            backgroundColor: "darkGreen",
            color: "lightgrey"
        }
    },
    firstModalBtn: {
        color: "white",
        backgroundColor: "darkred"
    }
})

export default buttonStyle;