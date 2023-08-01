import React, { Component } from 'react';
import './../css/adminOrder.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Route, Routes } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';

export default class AdminOrder extends Component {
    constructor(props){
      super(props);
      this.state = {
        orderList : []
      }
    }

    componentDidMount(){
      this.getAllOrder();
    }

    getAllOrder(){
      axios.get("http://localhost:8000/order/getAllOrder").then(function (res) {
        this.setState({
          orderList: res.data
        });
        console.log(this.state.orderList);
      }.bind(this));
    }
  
  
  render() {
    return (
      <div id='firstDiv'>
        <Routes>
        <Route path='/' exact Component={AdminNavBar}></Route>
        </Routes>
        
      <div className='mainAdminOrderDiv'>
       

        <div className='tableDiv'>
          <br/><br/>
          <h2>Orders</h2>
          <br/><br/>
        <table className='table table-success table-striped'>
                  <tr>
                  <th>Order</th>
                  <th>Customer Name</th>
                  <th>Discount</th>
                  <th>Amount</th>
                  </tr>
                  {this.state.orderList.map((ordList) => (
                  <tbody key={ordList.orderId}>
                  <tr>
                    <td><FontAwesomeIcon icon={faUser} /></td>
                    <td>{ordList.customerId}</td>
                    <td>{ordList.discount}</td>
                    <td>{ordList.amount}</td>
                  </tr>
                  </tbody>
                  ))}
                </table>
        </div>


      </div>
      </div>
    )
  }
}
