import React, { Component } from "react";
import Card from "../card/Card";
import cardBoardStyle from "./CardBoardStyle";

const CardBoard = (props) => {
    const { items, action } = props;
    const cardsBundle = [];
    items.forEach(element => {
      const { name, price, imageURL, vendorCode, color, id } = element;
      cardsBundle.push(
        <Card
          key={vendorCode}
          name={name}
          imageURL={imageURL}
          price={price}
          vendorNumber={vendorCode}
          color={color}
          id={id}
          items={items}
          action={action}
        />
      );
    });
    const style = cardBoardStyle();
    return (
      <div className={style.cardBoard}>
        {cardsBundle}
      </div>
    );
}

export default CardBoard;
