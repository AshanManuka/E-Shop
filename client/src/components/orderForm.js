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
  }


  getCartItems(){
    axios.get("http://localhost:8000/cart/getCart").then(function (res) {
      this.setState({
        cartItemList: res.data
      });
      console.log(this.state.cartList);
    }.bind(this));
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
                  </tr>
                  {this.state.cartItemList.map((cartItem) => (
                  <tbody key={cartItem.itemCode}>
                  <tr>
                    <td>{cartItem.itemCode}</td>
                    <td>{cartItem.itemName}</td>
                    <td>{cartItem.price}</td>
                    <td>{cartItem.itemQty}</td>
                  </tr>
                  </tbody>
                  ))}
                </table>
                
          

                </div>

                {/* {this.state.cartItemList.map((cartItem) => (
          <div key={cartItem.itemCode}>
            <div>
            <h5>|  </h5>
            <h5>{cartItem.itemName}</h5>
            <h5>  -   Rs:</h5>
            <h5>{cartItem.price}</h5>
            <h5>   -   Qty:</h5>
            <h5>{cartItem.itemQty}</h5>
            <h5>     - </h5>
            <button className='delBtn'><FontAwesomeIcon icon={faDeleteLeft} /></button>
            <hr />
            </div>
          </div>
        ))} */}



            </div>



      </div>
    )
  }
}
