import React, { Component } from 'react'

export default class AddStockForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: '',
      price: 0,
      shares: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.price);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
     [name]: value
    });
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Add a Stock</h1>
      <p>Enter ticker symbol:</p>
      <input
        type='text'
        name='symbol'
        value={this.state.symbol}
        onChange={this.handleInputChange}
      />
      <p>What was the purchase price:</p>
      <input
        type='number'
        name='price'
        value={this.state.price}
        onChange={this.handleInputChange}
      />
      <p>How many shares:</p>
      <input
        type='number'
        name='shares'
        value={this.state.shares}
        onChange={this.handleInputChange}
      />
      <input
        type='submit'
      />
      </form>
    );
  }
}
