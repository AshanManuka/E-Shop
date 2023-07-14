import React, { Component } from 'react';
import axios from 'axios';

export default class ItemList extends Component {
  
    constructor(props){
        super(props);
    
        this.state = {
          items : []
        }
      }
  

      //call lifecycleMethod
  componentDidMount(){
    this.getAllItems();
  }

  getAllItems(){
    axios.get("http://localhost:8000/item/getItem").then(res=>{
      // if(res.data.success){}
      this.setState({
          items:res.data
      });
      console.log(this.state.items);

    });
  }

    render() {
    return (
      
        <div>
        {this.state.items.map(item => (
        <div key={item.itemCode}> {/* Added a key prop */}
          <h1>Item</h1>
          <h5>{item.itemCode}</h5> {/* Wrapped the variable in curly braces */}
          <h5>{item.itemName}</h5> {/* Wrapped the variable in curly braces */}
          <h5>{item.imageUrl}</h5> {/* Wrapped the variable in curly braces */}
          <h5>{item.price}</h5> {/* Wrapped the variable in curly braces */}
          <h5>{item.qtyOnHand}</h5> {/* Wrapped the variable in curly braces */}
          <h5>________________________________</h5>
        </div>
      ))}

      </div>

    )
  }
}
