import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import Button from "../button/Button";
// import Button from '../button/Button';
import "./Cards.scss";

class Card extends Component {
  state = {
    starFlag: true
  };

  render() {
    const { starFlag } = this.state;
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
    } = this.props;

    const itemsCopy = {...items};

    function changeStar() {
      this.setState({
        starFlag: !this.state.starFlag
      });
    }

    function addToFavourites() {
      changeStar.call(this);
      //   debugger;
      let favourite = [];
      let includesIndicator = false;
      if (localStorage.getItem("favourite")) {
        favourite = [...JSON.parse(localStorage.getItem("favourite"))];

        favourite.forEach(element => {
          // debugger;
          if (element.vendorCode === items[id].vendorCode) {
            favourite.splice(element, 1);
            includesIndicator = true;
            if (favourite.length === 0) {
              localStorage.clear();
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

    function addToCart() {
      let inCart = [];
      let includesIndicator = false;
      if (localStorage.getItem("inCart")) {
        inCart = [...JSON.parse(localStorage.getItem("inCart"))];

        // inCart.forEach(element => {
        //   if (element.vendorCode === items[id].vendorCode) {
        //     // inCart.splice(element, 1);
        //     includesIndicator = true;
        //     element.inCartQuantity += 1;
        //     localStorage.setItem("inCart", JSON.stringify(inCart));
        //   }
        // });

        for (const element of inCart) {
          if (element.vendorCode === items[id].vendorCode) {
            // inCart.splice(element, 1);
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
      <section key={vendorNumber} className="card-wrapper">
        <span className="vendor-number">{vendorNumber}</span>
        <img className="card-item-img" src={imageURL} alt={name + "picture"} />
        <h1 className="card-item-name">{name}</h1>
        <div className="star-btn-wrapper">
          <span className="card-item-price">{price + "UAH"}</span>
          <FontAwesomeIcon
            className="card-item-star"
            icon={stars[+starFlag]}
            onClick={addToFavourites.bind(this)}
          />
          <Button text="Buy now" style="secondButton" action={addToCart} />
        </div>
      </section>
    );
  }
}

export default Card;
