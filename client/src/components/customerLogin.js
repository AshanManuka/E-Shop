import React, { Component } from 'react';
import '../css/customerLogin.css';

export default class customerLogin extends Component {
  render() {
    return (
      <div className='cusLoginMainDiv'>
        <br/>
        <h2><b>Login Here</b></h2>
        <br/>
            <div className='subDivOne'>
            <br/><br/>
            <label><h4><b>Username : </b></h4></label><br/>
            <input placeholder='sample name' type='text'></input>
            <br/><br/>
            <label><h4><b>Password : </b></h4></label><br/>
            <input type='password'></input>
            <br/><br/>

            <button id='logAdmin' ><h5><b>Login as Admin</b></h5></button>
            <br/>

            <br/>
            <button id='logCustomer'><h5><b>Login as Customer</b></h5></button>

            
            </div>


      </div>
    )
  }
}