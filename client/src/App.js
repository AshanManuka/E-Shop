import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import UserDashboard from './components/UserDashboard';
import ItemList from './components/ItemList';
import OrderForm from './components/OrderForm';



export default class App extends Component {
  render() {
    return (
         <BrowserRouter>
            <div className='container'> 
            

            <Routes>
            <Route path="/" exact Component={Home}></Route>
            <Route path="/userPage" exact Component={UserDashboard}></Route>
            <Route path="/itemPage" exact Component={ItemList}></Route>
            <Route path='orderForm' exact Component={OrderForm}></Route>
            </Routes>
            
            
            </div>
        </BrowserRouter>         
        
    )
  }
}
