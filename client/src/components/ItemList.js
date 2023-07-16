import React, { Component } from 'react';
import axios from 'axios';
import './../css/itemList.css';
import NavBar from './NavBar';
import OrderForm from './OrderForm';
import { Route, Routes } from 'react-router-dom';

export default class ItemList extends Component {
    
  constructor(props){
        super(props);
    
        this.state = {
          items : [],
          cart : []
        }
      }
  

      //call lifecycleMethod
  componentDidMount(){
    this.getAllItems();
  }

  getAllItems(){
    axios.get("http://localhost:8000/item/getItem").then(res=>{
      // if(res.data.success){}
      this.setState({
          items:res.data
      });
      console.log(this.state.items);

    });
  }

  getCartList(){
    axios.get("http://localhost:8000/cart/getCart").then(res=>{
    this.setState({
      cart:res.data
    });
    console.log(this.state.cart);
    });
  }

    render() {
    return (
     
      <div>
        <Routes>
        <Route path='/' exact Component={NavBar}></Route>
        <Route path="/orderForm" exact Component={OrderForm}></Route>
        </Routes>
        <br/>
        <div>
          
        {this.state.items.map(item => (
        <div key={item.itemCode} id='mainDiv'>

          <div className='itemDiv'>
          <div className='imageDiv'>
          <img src={require("./../assets/wapeTwo.jpg")} alt="itemImage" className='itemImage'/>
          </div> 
          
          <div className='desDiv'>
          <h5>Item-Code : </h5><h6>{item.itemCode}</h6><br/><br/> 
          <h5>Item-Name : </h5><h6>{item.itemName}</h6><br/><br/>  
          <h5>Unit-Price : </h5><h6>{item.price}</h6><br/><br/>
          <h5>Desctiption : </h5><h6>Sample description about Item</h6><br/><br/>  
          </div>

          <button type="button" id='addToCart'><a href='/cartForm' style={{textDecoration: 'none', color: 'black'}}><h3>CART</h3></a></button><br/><br/>
          <button type="button" id='buyBtn'><a href='/orderForm' style={{textDecoration: 'none', color: 'black'}}><h3>BUY</h3></a></button>

          </div>
       <br/>
          
        </div>
      ))}

      </div>

      <div className='cartList'>
        <h2><b>My CART</b></h2>
          <div className='itemN'>
          <br/><br/>



          </div>
          <br/><br/><br/><br/>
  
          <button className='makeOrderBtn'><b>Place Order</b></button>


      </div>

      </div>

    )
  }
}
