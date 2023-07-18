import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import './../css/adminDashboard.css';

export default class AdminDashboard extends Component {

  
  render() {
    return (
      <div className='mainDiv'>
        
      <div className='navDiv'>
      <img src={require('./../assets/storeLogo.png')} alt="profile picture"/>

      <button className='navBtn'><FontAwesomeIcon icon={faHouse} size='2x'/></button>
      </div>

      <div className='bodyDiv'>

          <button type="button" className="btnOne"><a href='/adminItem' style={{textDecoration: 'none', color: 'white'}}><h3>| Manage Items</h3><h2><i class="fa-solid fa-volleyball"></i></h2></a></button><br/>
          <button type="button" className="btnTwo"><a href='/itemPage' style={{textDecoration: 'none', color: 'white'}}><h3>| Manage Users</h3></a></button><br/>
          <button type="button" className="btnThree"><a href='/itemPage' style={{textDecoration: 'none', color: 'white'}}><h3>| Reports</h3></a></button><br/>
          <button type="button" className="btnFour"><a href='/itemPage' style={{textDecoration: 'none', color: 'white'}}><h3>| Settings</h3></a></button>
          <button type="button" className="btnFive"><a href='/itemPage' style={{textDecoration: 'none', color: 'white'}}><h3>| Reports</h3></a></button><br/>
          <button type="button" className="btnSix"><a href='/itemPage' style={{textDecoration: 'none', color: 'white'}}><h3>| Settings</h3></a></button>
          

      </div>





      </div>
    )
  }
}
