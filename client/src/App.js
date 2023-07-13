import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';



export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
              <div className='container'>
                <NavBar/>                
                <Route path='/' exact Component={Home}></Route>
                {/* <Route path='/adminForm' exact Component={AdminDashboard}></Route>
                <Route path='/orderForm' exact Component={OrderForm}></Route> */}
                

              </div>
        </BrowserRouter>
    )
  }
}
