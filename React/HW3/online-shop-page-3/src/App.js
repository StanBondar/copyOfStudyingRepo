import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import CardBoard from "./pages/cardBoard/CardBoard";
import Modal from "./components/modal/Modal";
import Button from "./components/button/Button";
import Header from "./components/header/Header";
import modalStyle from "./components/modal/ModalStyle";
import buttonStyle from "./components/button/ButtonStyle";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import AppRoutes from "./Routes/AppRoutes";

const App = () => {
  const modStyle = modalStyle();
  const btnStyle = buttonStyle();

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(()=> {
    // localStorage.clear();
    axios.get("/itemsCollection.json").then(response => {
      setTimeout(() => {
        setItems(response.data);
        setLoading(!loading);
      }, 2000);
    });
  },[]);

  const toggleModalVisibility = () => {
    setModalVisibility(!modalVisibility);
  }

    const submitBtn = (
      <Button
        style={btnStyle.button+" "+btnStyle.firstModalBtn}
        text="Ok"
        action={toggleModalVisibility.bind(this)}
      />
    );

    const modal = (
      <Modal
        header="Success"
        text="Item added to cart 8)"
        modalBodyStyle={modStyle.modalBody+" "+modStyle.secondModalBody}
        modalHeaderStyle={modStyle.modalHeader+" "+modStyle.secondModalHeader}
        buttons={submitBtn}
      />
    );

    // if (loading) {
    //   return <p>Loading...</p>;
    // }

    // return (
    //   <div className="App">
    //     <CardBoard 
    //       items={items} 
    //       action={toggleModalVisibility.bind(this)}
    //       />
    //     {modalVisibility&&modal}
    //   </div>
    // );

    return (
      <div className="App">
        <Header />
        {loading ? (
          <p>Loading...</p>
        ) : (
          
          <AppRoutes items={items} action={toggleModalVisibility.bind(this)}/>
          
          
        )}
        { modalVisibility&&modal }
      </div>
    )
    
}
export default App;
