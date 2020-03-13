import React from 'react';
import logo from './heart.svg';
import './App.css';
import Button from './components/button/Button';
import Modal from './components/modal/Modal';
import './components/styles/mainStyles.scss';

class App extends React.Component {
  state = {
    firstButton: {
      text: 'Open first modal',
      style: "firstButton"
    },
    secondButton: {
      text: 'Open second modal',
      style: "secondButton"
    },
    firstModal: {
      unvisible: false,
      header: 'Do you want to delete this file?',
      closeButton: true,
      text: "Once you delete this file, it won't be possible to undo this action. Are you shure you want to delete it?",
      bodyClassName: "firstModalBody",
      headerClassName: 'firstModalHeader'
    },
    secondModal: {
      unvisible: false,
      header: 'Second Modal Header',
      closeButton: true,
      text: "Once you delete this file, it won't be possible to undo this action. Are you shure you want to delete it?",
      bodyClassName: "secondModalBody",
      headerClassName: 'secondModalHeader'
    }
  }

  toggleFirstModalVisibility = (e) => {
    if (e.target.classList.contains('firstButton') || e.target.classList.contains('modalBackground')) {
      this.setState({ firstModal: { ...this.state.firstModal, unvisible: !this.state.firstModal.unvisible } })
    }
  }

  toggleSecondModalVisibility = (e) => {
    if (e.target.classList.contains('secondButton') || e.target.classList.contains('modalBackground')) {
      this.setState({ secondModal: { ...this.state.secondModal, unvisible: !this.state.secondModal.unvisible } })
    }
  }

  render() {
    const { firstButton, secondButton, firstModal, secondModal } = this.state;
    const modalElements = {
      firstModalElement: (<Modal modalHeaderStyle={firstModal.headerClassName} modalBodyStyle={firstModal.bodyClassName} header={firstModal.header} closeButton={firstModal.closeButton} text={firstModal.text} changeVisibility={this.toggleFirstModalVisibility.bind(this)} />),
      secondModalElement: (<Modal modalHeaderStyle={secondModal.headerClassName} modalBodyStyle={secondModal.bodyClassName} header={secondModal.header} closeButton={secondModal.closeButton} text={secondModal.text} changeVisibility={this.toggleSecondModalVisibility.bind(this)} />)
    }

    return (
      <div className="App">
        <div className="mainContainer">
          <Button style={firstButton.style} text={firstButton.text} action={this.toggleFirstModalVisibility.bind(this)} />
          <Button style={secondButton.style} text={secondButton.text} action={this.toggleSecondModalVisibility} />
          {firstModal.unvisible && modalElements.firstModalElement}
          {secondModal.unvisible && modalElements.secondModalElement}
        </div>
      </div>
    );
  }
}
export default App;
