import React, { Component } from 'react';
import axios from 'axios';
import './../css/itemList.css';


export default class ItemList extends Component {
    
  constructor(props){
        super(props);
    
        this.state = {
          items : []
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

    render() {
    return (
      
        <div>
        {this.state.items.map(item => (
        <div key={item.itemCode}>

          <div className='itemDiv'>
          <div className='imageDiv'>
          <img src={item.imageUrl} alt="itemImage" className='itemImage'/>
          </div> 
          
          <div className='desDiv'>
          <h5>Item-Code : </h5><h6>{item.itemCode}</h6><br/><br/> 
          <h5>Item-Name : </h5><h6>{item.itemName}</h6><br/><br/>  
          <h5>Unit-Price : </h5><h6>{item.price}</h6><br/><br/>
          <h5>Desctiption : </h5><h6>This Item sample description</h6><br/><br/>  
          </div>

          <button type="button" id='addToCart'><a href='/itemPage' style={{textDecoration: 'none', color: 'black'}}><h3>Add To Cart</h3></a></button><br/><br/>
          <button type="button" id='buyBtn'><a href='/itemPage' style={{textDecoration: 'none', color: 'black'}}><h3>Buy</h3></a></button>

          </div>
       <br/>
          
        </div>
      ))}

      </div>

    )
  }
}
