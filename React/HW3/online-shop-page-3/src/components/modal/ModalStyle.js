import { createUseStyles } from "react-jss";

const modalStyle = createUseStyles({
  modalBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    backgroundColor: "#9e9e9e75",
    position: "fixed",
    top: 0,
    left: 0,
  },
  modalHeader: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  firstModalHeader: {
    backgroundColor: "darkred",
  },
  secondModalHeader: {
    backgroundColor: "darkgreen",
  },
  modalBody: {
    width: "50%",
    minHeight: "fit-content",
    height: 200,
    color: "white",
    padding: "0 0 10",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  firstModalBody: {
    backgroundColor: "red",
  },
  secondModalBody: {
    backgroundColor: "green",
  },
  closeButton: {
    fontSize: 32,
    cursor: "pointer",
  },
  modalButtonsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
}
});

export default modalStyle;