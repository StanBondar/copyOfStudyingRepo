import React, { Component } from "react";
import "./CardBoard.scss";
import Card from "../card/Card";

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

    return (
      <div className="card-board">
        {cardsBundle}
      </div>
    );
}

export default CardBoard;
