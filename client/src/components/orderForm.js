import React, { Component } from 'react';
import './../css/orderFrom.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';


export default class OrderForm extends Component {
  
  constructor(props){

    super(props);

    this.state = {
      cartItemList : []
      
    }
  }


  componentDidMount(){
    this.getCartItems();
    this.countTotal();
  }


  getCartItems(){
    axios.get("http://localhost:8000/cart/getCart").then(function (res) {
      this.setState({
        cartItemList: res.data
      });
    }.bind(this));
  }

  countTotal(){
    let totalPrice = 0;
    this.state.cartItemList.forEach((cartItem) => {
      totalPrice += cartItem.price * cartItem.itemQty;
    });
    
    return totalPrice;    
  }


  deleteCartList(){
    
    axios.delete("http://localhost:8000/cart/deleteAll")
      .then(response => {
        console.log("Delete successful:", response.data);
      })
      .catch(error => {
        console.error("Error deleting cart items:", error);
      });
      window.location.reload();
  }
  
  
  render() {
    return (
      <div>

            <div className='orderDiv'>

                <h1>Place Your Order</h1><br/><br/>

                <div className='mainList'>

                <table className='table table-success table-striped'>
                  <tr>
                  <th>Item Code</th>
                  <th>Item Name</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Edit List</th>
                  </tr>
                  {this.state.cartItemList.map((cartItem) => (
                  <tbody key={cartItem.itemCode}>
                  <tr>
                    <td>{cartItem.itemCode}</td>
                    <td>{cartItem.itemName}</td>
                    <td>{cartItem.price}</td>
                    <td>{cartItem.itemQty}</td>
                    <td><button className='delBtn'><FontAwesomeIcon icon={faDeleteLeft} /></button></td>
                  </tr>
                  </tbody>
                  ))}
                </table>

                </div>

                <div className='descDiv'>

                <h1 className='amountH'>Amount : {this.countTotal()}</h1>
                <br/><br/>

                <button className='placeOrderBtn' onClick={this.deleteCartList}><h2><b>Order</b></h2></button>
                
                </div>

            </div>



      </div>
    )
  }
}
