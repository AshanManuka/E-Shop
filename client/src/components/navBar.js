import React, { Component } from 'react';
import './../css/navBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        
        <div className='leftDiv'>
            <div className='userImage'>
            <img src={require('./../assets/storeLogo.png')} alt="profile picture"/>
            </div>

            <div className='searchBar'>
                <input className='searchField' placeholder='  Find Items' type='text'></input>
            </div>

            <div className='searchBtn'>
                <button>Search</button>
            </div>

            <div className='homeBtn'>
                <button className='navBtn'>Home</button> 
            </div>

            <div className='dashboardBtn'>
                <button className='navBtn'>DashBoard</button>
            </div>

        </div>
    


      </div>
    )
  }
}
