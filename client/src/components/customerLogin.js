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

            <div className='subDivTwo'>
                <h5><b>If you don't have an Account,</b></h5>
                <h2><b>Register Here</b></h2>
                <br/>
            <label><h4><b>Name : </b></h4></label>
            <input placeholder='sample name' type='text'></input>
            <br/><br/>
            <label><h4><b>Contact Number : </b></h4></label>
            <input placeholder='070XXXXXXX' type='number'></input>
            <br/><br/>
            <label><h4><b>Address : </b></h4></label>
            <input placeholder='No 00, city' type='text'></input>
            <br/><br/>
            <label><h4><b>UserName : </b></h4></label>
            <input placeholder='john' type='text'></input>
            <br/><br/>
            <label><h4><b>Password : </b></h4></label>
            <input placeholder='Ls@65$Q!2' type='password'></input>
            <br/><br/>
            <label><h4><b>Confirm Password : </b></h4></label>
            <input placeholder='Ls@65$Q!2' type='password'></input>

            <br/>
            <button id='regCustomer'><h5><b>Register as Customer</b></h5></button>
            </div>


      </div>
    )
  }
}
