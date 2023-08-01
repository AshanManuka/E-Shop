import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './../css/adminCustomer.css';


export default class adminCustomer extends Component {
  
    constructor(props){
        super(props);
    
        this.state = {
          customerList : []          
        }
      }
    

      componentDidMount(){
        this.loadAllCustomers();
      }

      loadAllCustomers(){
        axios.get("http://localhost:8000/customer/getCustomer").then(function (res) {
      this.setState({
        customerList: res.data
      });
    }.bind(this));
      }
  
  
  
  
  
    render() {
    return (
      <div>
        <Routes>
        <Route path='/' exact Component={AdminNavBar}></Route>
        </Routes>


        <div className='contentDiv'>

          <div>  

        <table className='table table-success table-striped'>
                  <tr>
                  <th>Customer</th>
                  <th>Customer Name</th>
                  <th>Contact Number</th>
                  <th>Address</th>
                  <th>Delete Customer</th>
                  </tr>
                  {this.state.customerList.map((cusList) => (
                  <tbody key={cusList.customerId}>
                  <tr>
                    <td><FontAwesomeIcon icon={faUser} /></td>
                    <td>{cusList.cusName}</td>
                    <td>{cusList.cusContact}</td>
                    <td>{cusList.cusAddress}</td>
                    <td><button className='delBtn'><FontAwesomeIcon icon={faDeleteLeft} /></button></td>
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
