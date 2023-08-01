import React, { Component } from 'react';
import './../css/navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';




export default class NavBar extends Component {
  render() {
    return (
      <div>
        
        <div className='leftDiv'>
            <div className='userImage'>
            <img src={require('./../assets/storeLogo.png')} alt="profile picture"/>
            </div>

            <div className='searchBar'>
                <input className='searchField' placeholder='  Find ' type='text'></input>
            </div>

            <div className='searchBtn'>
                <button>Search</button>
            </div>

            <div className='homeBtn'>
                <button className='navBtn'><a href='/'><h3><FontAwesomeIcon icon={faHouse} size='2x'/></h3></a></button>
            </div>

            <div className='dashboardBtn'>
                <button className='navBtn'><FontAwesomeIcon icon={faTag} size='2x'/></button>
            </div>

        </div>
    


      </div>
    )
  }
}
