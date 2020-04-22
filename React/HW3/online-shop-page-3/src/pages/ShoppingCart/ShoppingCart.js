import React, { useState, useEffect } from "react";
import {} from "../../components/card/Card";
import CardBoard from "../cardBoard/CardBoard";
import { toggleModalVisibility } from "../../App";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";

const ShoppingCart = (props) => {
  const {action} = props;
  const [cartItems, setCartItems] = useState([]);

    

    useEffect(()=> {
      if (localStorage.getItem("inCart")) {
      let items = JSON.parse(localStorage.getItem("inCart"));
      debugger;
      setCartItems(items);
        console.log("this is cart items:", cartItems);
    }
    },[])

  return (
    <div>
      {/* <CardBoard items={cartItems} action={toggleModalVisibility}/> */}
      <h1>This is cart.</h1>
    </div>
    
  );
};

export default ShoppingCart;
