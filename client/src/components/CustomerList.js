import React, { Component } from 'react';
import axios from 'axios';

export default class CustomerList extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          customers : []
        }
      }
  

      //call lifecycleMethod
  componentDidMount(){
    this.getAllCustomers();
  }

  getAllCustomers(){
    axios.get("http://localhost:8000/customer/getCustomer").then(res=>{
      // if(res.data.success){}
      this.setState({
          customers:res.data
      });
      console.log(this.state.customers);

    });
  }

    render() {
    return (
      
        <div>
        {this.state.customers.map(customer => (
        <div key={customer.customerId}> {/* Added a key prop */}
          <h1>Customer</h1>
          <h5>{customer.customerId}</h5> {/* Wrapped the variable in curly braces */}
          <h5>{customer.customerName}</h5> {/* Wrapped the variable in curly braces */}
          <h5>{customer.contactNumber}</h5> {/* Wrapped the variable in curly braces */}
          <h5>{customer.address}</h5> {/* Wrapped the variable in curly braces */}
          <h5>________________________________</h5>
        </div>
      ))}

      </div>

    )
  }
}

