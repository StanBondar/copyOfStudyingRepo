import React, {useState, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import CardBoard from "./components/cardBoard/CardBoard";
import Modal from "./components/modal/Modal";
import Button from "./components/button/Button";
import Header from "./components/header/Header";

const App = () => {
  // state = {
  //   loading: true,
  //   items: [],
  //   modalVisibility: false
  // };

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const componentDidMount = () => {
    localStorage.clear();
    axios.get("/itemsCollection.json").then(response => {
      setTimeout(() => {
        // this.setState({
        //   items: response.data,
        //   loading: !this.state.loading
        // });
        debugger;
        setItems(response.data);
        setLoading(!loading);
        console.log("State after loading", items);
      }, 2000);
    });
  }

  useEffect(()=> {
    localStorage.clear();
    axios.get("/itemsCollection.json").then(response => {
      setTimeout(() => {
        // this.setState({
        //   items: response.data,
        //   loading: !this.state.loading
        // });
        setItems(response.data);
        setLoading(!loading);
        console.log("State after loading", items);
      }, 2000);
    });
  },[]);

  const toggleModalVisibility = () => {
    // this.setState({
    //   modalVisibility: !this.state.modalVisibility
    // })
    setModalVisibility(!modalVisibility);
  }

    // const { loading, items, modalVisibility } = this.state;
    const submitBtn = (
      <Button
        style="firstModalBtn"
        text="Ok"
        action={toggleModalVisibility.bind(this)}
      />
    );

    const modal = (
      <Modal
        header="Success"
        text="Item added to cart 8)"
        modalBodyStyle="secondModalBody"
        modalHeaderStyle="secondModalHeader"
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
          <CardBoard 
          items={items} 
          action={toggleModalVisibility.bind(this)}
          />
        )}
        { modalVisibility&&modal }
      </div>
    )
}
export default App;
