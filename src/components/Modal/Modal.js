import React, { Component } from 'react'
import Modal from 'react-modal'
import AddStockForm from '../Forms/AddStockForm/AddStockForm'

export default class MyModal extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <Modal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <AddStockForm/>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }
}
