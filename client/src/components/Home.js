import React, { Component } from 'react';
import './../css/home.css';
import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {
  
  render() {
    return (
      <div>
        
        <button type="button" id='adminBtn'><a href='/adminDashboard' style={{textDecoration: 'none', color: 'black'}}><h3><FontAwesomeIcon icon={faScrewdriverWrench} /></h3></a></button>

        <br/>
        <h1 style={{color:"#011740"}}>| Welcome to the CoMaZZ Online Shopping Store</h1>
        <br/><br/>
         

        <div className='btnSec'>
        {/* <h2 style={{color:"black"}}><b>Categories..</b></h2> */}
        <br/>
          <button type="button" class="btn btn-primary"><a href='/itemPage' style={{textDecoration: 'none', color: 'white'}}><h3>| Sport Items</h3><h2><i class="fa-solid fa-volleyball"></i></h2></a></button><br/>
          <button type="button" class="btn btn-dark"><a href='/itemPage' style={{textDecoration: 'none', color: 'white'}}><h3>| Mobile & Accesories</h3></a></button><br/>
          <button type="button" class="btn btn-success"><a href='/itemPage' style={{textDecoration: 'none', color: 'white'}}><h3>| Textile Items</h3></a></button><br/>
          <button type="button" class="btn btn-danger"><a href='/itemPage' style={{textDecoration: 'none', color: 'white'}}><h3>| Cosmetics Items</h3></a></button>
        </div>


        <div className='sliderDiv'>
          <h3 style={{fontFamily:'serif', color: 'GrayText'}}><b>Discount Today</b></h3>
        <img src={require('./../assets/wapeOne.jpg')} alt="Today Discount Item" />
        </div>


        <button type="button" id='goBtn'><a href='/itemPage' style={{textDecoration: 'none', color: 'black'}}><h3>Let's Shopping</h3></a></button>


    </div>

       

        


       
      
      
    )
  }
}
