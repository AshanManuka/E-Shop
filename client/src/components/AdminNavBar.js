import React, { Component } from 'react';
import './../css/adminNavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';




export default class NavBar extends Component {
  render() {
    return (
      <div id='adminNavBarDiv'>
        
        <div className='leftDiv2'>
            <div className='userImage2'>
            <img src={require('./../assets/storeLogo.png')} alt="profile picture"/>
            </div>

            <div className='homeBtn2'>
                <button className='navBtn2'><a href='/'><h3><FontAwesomeIcon icon={faHouse} size='2x'/></h3></a></button>
            </div>

            <div className='dashboardBtn2'>
                <button className='navBtn2'><FontAwesomeIcon icon={faTag} size='2x'/></button>
            </div>

        </div>
    


      </div>
    )
  }
}
