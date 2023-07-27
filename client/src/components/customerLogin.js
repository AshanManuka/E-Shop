import React, { Component } from 'react';
import '../css/customerLogin.css';
import axios from 'axios';

export default class customerLogin extends Component {
    constructor(props){
        super(props);

        this.state = {
          cusName : "",
          cusContact : "",
          cusAddress : "",
          cusUserName : "",
          cusPassword : "",
          confirmPassword : "",
          cusLogName : "",
          cusLogPassword : ""
        }

        this.customerRegister = this.customerRegister.bind(this);
        this.customerLogin = this.customerLogin.bind(this);
    }



  customerRegister(){
    
    if(this.state.cusPassword === this.state.confirmPassword){
      
      const newCustomer = {
        cusName : this.state.cusName,
        cusContact : this.state.cusContact,
        cusAddress : this.state.cusAddress,
        cusUserName : this.state.cusUserName,
        cusPassword : this.state.cusPassword
      };

      axios.post("http://localhost:8000/customer/savecustomer", newCustomer)
      .then((response) => {
        alert("You are saved successfully")
      })
      .catch((error) => {
        alert("not Saved");
      });

    }else{
      alert("Passwords are not match!!")
    }
    
  }


  customerLogin(){

      var uName = this.state.cusLogName;
      var pWord = this.state.cusLogPassword;

      axios
      .post('http://localhost:8000/customer/login', {
        cusUserName: uName,
        cusPassword: pWord,
      })
      .then((response) => {
        alert("login success");
        console.log('Login successful:', response.data.customer);
        // Handle successful login (e.g., store customer data in state or local storage)
      })
      .catch((error) => {
        console.error('Error during login:', error.response.data.message);
        // Handle login error (e.g., display error message to the user)
      });
  }






  render() {
    return (
      <div className='cusLoginMainDiv'>
        <br/>
        <h2><b>Login Here</b></h2>
        <br/>
            <div className='subDivOne'>
            <br/><br/>
            <label><h4><b>Username : </b></h4></label><br/>
            <input placeholder='sample name' type='text' value={this.state.cusLogName} onChange={(e) => this.setState({ cusLogName: e.target.value })}></input>
            <br/><br/>
            <label><h4><b>Password : </b></h4></label><br/>
            <input type='password' value={this.state.cusLogPassword} onChange={(e) => this.setState({ cusLogPassword: e.target.value })}></input>
            <br/><br/>

            <button id='logAdmin' ><h5><b>Login as Admin</b></h5></button>
            <br/>

            <br/>
            <button id='logCustomer' onClick={this.customerLogin}><h5><b>Login as Customer</b></h5></button>
            </div>

            <div className='subDivTwo'>
                <h5><b>If you don't have an Account,</b></h5>
                <h2><b>Register Here</b></h2>
                <br/>
            <label><h4><b>Name : </b></h4></label>
            <input placeholder='sample name' type='text' value={this.state.cusName} onChange={(e) => this.setState({ cusName: e.target.value })}></input>
            <br/><br/>
            <label><h4><b>Contact Number : </b></h4></label>
            <input placeholder='070XXXXXXX' type='number' value={this.state.cusContact} onChange={(e) => this.setState({ cusContact: e.target.value })}></input>
            <br/><br/>
            <label><h4><b>Address : </b></h4></label>
            <input placeholder='No 00, city' type='text' value={this.state.cusAddress} onChange={(e) => this.setState({ cusAddress: e.target.value })}></input>
            <br/><br/>
            <label><h4><b>UserName : </b></h4></label>
            <input placeholder='john' type='text' value={this.state.cusUserName} onChange={(e) => this.setState({ cusUserName: e.target.value })}></input>
            <br/><br/>
            <label><h4><b>Password : </b></h4></label>
            <input placeholder='Ls@65$Q!2' type='password' value={this.state.cusPassword} onChange={(e) => this.setState({ cusPassword: e.target.value })}></input>
            <br/><br/>
            <label><h4><b>Confirm Password : </b></h4></label>
            <input placeholder='Ls@65$Q!2' type='password' value={this.state.confirmPassword} onChange={(e) => this.setState({ confirmPassword: e.target.value })}></input>

            <br/>
            <button id='regCustomer' onClick={this.customerRegister}><h5><b>Register as Customer</b></h5></button>
            </div>


      </div>
    )
  }
}
