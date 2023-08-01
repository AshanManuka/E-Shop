import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../css/adminDashboard.css';
import AdminNavBar from './AdminNavBar';
import { Route, Routes } from 'react-router-dom';



export default class AdminDashboard extends Component {

  
  render() {
    return (
      <div className='mainDiv'>
          
         <Routes>
        <Route path='/' exact Component={AdminNavBar}></Route>
        </Routes>


      <div className='bodyDiv'>
          <button type="button" className="btnOne"><a href='/adminItem' style={{textDecoration: 'none', color: 'white'}}><h3>| Manage Items</h3><h2><i class="fa-solid fa-volleyball"></i></h2></a></button><br/>
          <button type="button" className="btnTwo"><a href='/adminUser' style={{textDecoration: 'none', color: 'white'}}><h3>| Manage Users</h3></a></button><br/>
          <button type="button" className="btnThree"><a href='/adminOrder' style={{textDecoration: 'none', color: 'white'}}><h3>| Manage Order</h3></a></button><br/>
          <button type="button" className="btnFour"><a href='/itemPage' style={{textDecoration: 'none', color: 'white'}}><h3>| Reports</h3></a></button>
          <button type="button" className="btnFive"><a href='/itemPage' style={{textDecoration: 'none', color: 'white'}}><h3>| Discount</h3></a></button><br/>
          <button type="button" className="btnSix"><a href='/itemPage' style={{textDecoration: 'none', color: 'white'}}><h3>| Manage Admin</h3></a></button>
          

      </div>





      </div>
    )
  }
}
