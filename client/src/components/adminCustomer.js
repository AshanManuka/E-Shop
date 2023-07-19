import React, { Component } from 'react';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';


export default class adminCustomer extends Component {
  render() {
    return (
      <div>
        <Routes>
        <Route path='/' exact Component={NavBar}></Route>
        </Routes>



      </div>
    )
  }
}
