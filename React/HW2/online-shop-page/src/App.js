import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import CardBoard from "./components/cardBoard/CardBoard";
import Modal from "./components/modal/Modal";
import Button from "./components/button/Button";

class App extends React.Component {
  state = {
    loading: true,
    items: [],
    modalVisibility: false
  };

  componentDidMount() {
    localStorage.clear();
    axios.get("/itemsCollection.json").then(response => {
      setTimeout(() => {
        this.setState({
          items: response.data,
          loading: !this.state.loading
        });
        console.log("State after loading", this.state.items);
      }, 2000);
    });
  }

  toggleModalVisibility() {
    this.setState({
      modalVisibility: !this.state.modalVisibility
    })
  }

  render() {
    const { loading, items, modalVisibility } = this.state;
    // debugger;
    console.log("Hello");
    const submitBtn = (
      <Button
        style="firstModalBtn"
        text="Ok"
        action={this.toggleModalVisibility.bind(this)}
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

    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <CardBoard 
          items={items} 
          action={this.toggleModalVisibility.bind(this)}
          />
        {modalVisibility&&modal}
      </div>
    );
  }
}
export default App;
