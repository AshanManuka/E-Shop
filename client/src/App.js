import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import AdminDashboard from './components/AdminDashboard';



export default class App extends Component {
  render() {
    return (
         <BrowserRouter>
            <div className='container'> 
            <h1>Home Page</h1>

            <Routes>
            <Route path="/" exact Component={Home}></Route>
            <Route path="/adminPage" exact Component={AdminDashboard}></Route>
            </Routes>
            
            
            </div>
        </BrowserRouter>         
        
    )
  }
}
