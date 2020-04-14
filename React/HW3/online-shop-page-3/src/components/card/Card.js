import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import Button from "../button/Button";
// import "./Cards.scss";
import cardStyle from "./CardStyle";

const Card = (props) => {
  const [starFlag, setStarFlag] = useState(true)

    const stars = [solidStar, regularStar];
    const {
      name,
      imageURL,
      price,
      vendorNumber,
      color,
      id,
      items,
      action
    } = props;

    const itemsCopy = {...items};

    const changeStar = () => {
      setStarFlag(!starFlag);
    }

    const style = cardStyle();

    const addToFavourites = () => {
      changeStar.call(this);
      let favourite = [];
      let includesIndicator = false;
      if (localStorage.getItem("favourite")) {
        favourite = [...JSON.parse(localStorage.getItem("favourite"))];

        favourite.forEach(element => {
          if (element.vendorCode === items[id].vendorCode) {
            favourite.splice(element, 1);
            includesIndicator = true;
            if (favourite.length === 0) {
              localStorage.removeItem("favourite");
            } else {
              localStorage.setItem("favourite", JSON.stringify(favourite));
            }
          }
        });
      }
      if (includesIndicator === false) {
        favourite.push(items[id]);
        localStorage.setItem("favourite", JSON.stringify(favourite));
      }
    }

    const addToCart = () => {
      let inCart = [];
      let includesIndicator = false;
      if (localStorage.getItem("inCart")) {
        inCart = [...JSON.parse(localStorage.getItem("inCart"))];

        for (const element of inCart) {
          if (element.vendorCode === items[id].vendorCode) {
            includesIndicator = true;
            element.inCartQuantity += 1;
            localStorage.setItem("inCart", JSON.stringify(inCart));
            break;
          }
        }
      }

      if (includesIndicator === false) {
        itemsCopy[id].inCartQuantity = 1;
        inCart.push(itemsCopy[id]);
        localStorage.setItem("inCart", JSON.stringify(inCart));
      }

      action();
    }

    return (
      <section key={vendorNumber} className={style.cardWrapper}>
        <span className={style.vendorNumber}>{vendorNumber}</span>
        <img className={style.cardItemImg} src={imageURL} alt={name + "picture"} />
        <h1 className={style.cardItemName}>{name}</h1>
        <div className={style.starBtnWrapper}>
          <span className={style.cardItemPrice}>{price + "UAH"}</span>
          <FontAwesomeIcon
            className={style.cardItemStar}
            icon={stars[+starFlag]}
            onClick={addToFavourites.bind(this)}
          />
          <Button 
            text="Buy now" 
            style="secondButton" 
            action={addToCart} 
          />
        </div>
      </section>
    );
}

export default Card;
