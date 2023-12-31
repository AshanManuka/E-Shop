import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import UserDashboard from './components/UserDashboard';
import ItemList from './components/ItemList';
import OrderForm from './components/OrderForm';
import AdminDashboard from './components/AdminDashboard';
import adminCustomer from './components/adminCustomer';
import adminItemForm from './components/adminItemForm';
import customerLogin from './components/customerLogin';
import AdminOrder from './components/AdminOrder';





export default class App extends Component {
  render() {
    return (
         <BrowserRouter>
            <div className='container'> 
            

            <Routes>
            <Route path="/" exact Component={Home}></Route>
            <Route path='/loginPage' exact Component={customerLogin}></Route>
            <Route path="/itemPage" exact Component={ItemList}></Route>
            <Route path='/orderForm' exact Component={OrderForm}></Route>
            <Route path='/adminDashboard' exact Component={AdminDashboard}></Route>
            <Route path="/userPage" exact Component={UserDashboard}></Route>
            <Route path='/adminUser' exact Component={adminCustomer}></Route>
            <Route path='/adminItem' exact Component={adminItemForm}></Route>
            <Route path='/adminOrder' exact Component={AdminOrder}></Route>
            
          
            </Routes>
            
            
            </div>
        </BrowserRouter>         
        
    )
  }
}
