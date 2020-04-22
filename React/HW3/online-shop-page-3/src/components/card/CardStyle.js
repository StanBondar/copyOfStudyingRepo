import { createUseStyles } from "react-jss";

const cardStyle = createUseStyles({
  cardWrapper: {
    border: "1px solid black",
    borderRadius: 5,
    width: "30%",
    height: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: "fit-content",
    marginBottom: 30,
    padding: "1%",
  },
  vendorNumber: {
    width: "20%",
    height: 20,
    backgroundColor: "darkgoldenrod",
    color: "darkslategray",
    alignSelf: "flex-end",
  },
  cardItemImg: {
    // width: 90%;
    height: 200,
  },
  cardItemName: {
    fontSize: 16,
  },
  cardItemPrice: {
    color: "white",
    fontWeight: 700,
    backgroundColor: "orange",
    borderRadius: 5,
    padding: 10,
  },
  starBtnWrapper: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between"
  },
  cardItemStar: {
    color: "orange",
    fontSize: 24,
    transition: "all 0.3s ease-in",
    cursor: "pointer"
  }
});

export default cardStyle;