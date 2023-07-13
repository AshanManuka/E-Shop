import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import UserDashboard from './components/UserDashboard';



export default class App extends Component {
  render() {
    return (
         <BrowserRouter>
            <div className='container'> 
            

            <Routes>
            <Route path="/" exact Component={Home}></Route>
            <Route path="/userPage" exact Component={UserDashboard}></Route>
            </Routes>
            
            
            </div>
        </BrowserRouter>         
        
    )
  }
}
