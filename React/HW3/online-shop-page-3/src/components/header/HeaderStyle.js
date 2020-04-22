import { createUseStyles } from "react-jss";

const headerStyle = createUseStyles({
  header: {
    width: "100%",
    height: "50px",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "30px",
  },
  logo: {
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: "32px",
    textDecoration: 'none',
    color: '#fff',
    transition: 'all 0.3s ease-in',
    '&:hover': {
      color: "#1efea3",
      fontSize: "33px"
    }
  },
  "nav-bar": {
    width: "30%",
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  "header__link": {
    textDecoration: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'all 0.3s ease-in',
    '&:hover': {
      color: "#1efea3",
      fontSize: "19px"
    }
  },
  "header__link--active": {
    color: "#1efea3"
  }
});


export default headerStyle;