import React from 'react';
import './Table.scss'

export default class Table extends React.Component {
    constructor(props){
      super(props);
      this.getHeader = this.getHeader.bind(this);
      this.getRowsData = this.getRowsData.bind(this);
    }

    getHeader = function(){
      return this.props.keys.map((key, index)=>{
        return <th key={key}>{key.toUpperCase()}</th>
      })
    }

    getRowsData = function(){
      var items = this.props.tableData;
      return items.map((row, index)=>{
        return <tr key={index}><RenderRow key={index} data={row} keys={this.props.keys}/></tr>
      })
    }

    render() {
        return (
          <div>
            <table>
            <thead>
              <tr>{this.getHeader()}</tr>
            </thead>
            <tbody>
              {this.getRowsData()}
            </tbody>
            </table>
          </div>

        );
    }
}

const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
    return <td key={props.data[key]}>{props.data[key]}</td>
  })
}
