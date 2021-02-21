import React, { Component } from 'react'
import Table from '../Table/Table'

export default class RailsPG extends Component {
  constructor(props){
    super(props);
    this.state={
      tableData: [
         {
          "id": 1,
          "ticker_symbol": "TEST",
          "purchase_price": 122.22,
          "shares": 123,
          "purchase_date": "2020-10-01",
          "sale_date": null,
          "market_index": null,
          "profit_loss": null,
          "created_at": "2021-02-20T18:16:35.060Z",
          "updated_at": "2021-02-20T18:16:35.060Z"
        },
        {
          "id": 3,
          "ticker_symbol": "TESTY",
          "purchase_price": 12344.0,
          "shares": 666,
          "purchase_date": "2018-04-30",
          "sale_date": null,
          "market_index": null,
          "profit_loss": null,
          "created_at": "2021-02-20T22:07:35.733Z",
          "updated_at": "2021-02-20T22:31:19.319Z"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <br/> Table 1 data
        <Table data={this.state.tableData}/>
      </div>
    );
  }
}
