import React, { Component } from 'react'
import axios from 'axios';
import Table from '../Table/Table'

export default class RailsPG extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      tableData: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/v1/stocks`)
      .then(res => {
        this.setState({ tableData: res.data });
        this.setState({ isLoading: false });
      })
  }

  render() {
    const { isLoading, tableData } = this.state;

    if ( isLoading ) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <br/> Table 1 data
        <Table data={this.state.tableData}/>
      </div>
    );
  }
}
