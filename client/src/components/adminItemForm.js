import React, { Component } from 'react';
import './../css/adminItem.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';


export default class adminItemForm extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          itemList : [] ,
          selectedItem: null,
          itemCode: "",
          itemName: "",
          price: "",
          qtyOnHand: ""         
        }
      }

      componentDidMount(){
        this.loadAllItems();
      }


      loadAllItems(){
        axios.get("http://localhost:8000/item/getItem").then(function (res) {
        this.setState({
        itemList: res.data
        });
        }.bind(this));
      }

      handleItemClick(item) {
        this.setState({
          selectedItem: item,
          itemCode: item.itemCode,
          itemName: item.itemName,
          price: item.price,
          qtyOnHand: item.qtyOnHand
        });
      }
 
    render() {
    return (
      <div>
        
        <Routes>
        <Route path='/' exact Component={NavBar}></Route>
        </Routes>

        <br/>
        <h2><b>Manage ITEMS</b></h2>

        <div className='itemConDiv'>

          <div>  

        <table className='table table-success table-striped'>
                  <tr>
                  <th>Item Code</th>
                  <th>Item Name</th>
                  <th>price</th>
                  <th>Qty On Hand</th>
                  <th>Delete Item</th>
                  </tr>
                  {this.state.itemList.map((ittList) => (
                  <tbody key={ittList.itemCode}>
                  <tr>
                    <td>{ittList.itemCode}</td>
                    <td>{ittList.itemName}</td>
                    <td>{ittList.price}</td>
                    <td>{ittList.qtyOnHand}</td>
                    <td><button className='delBtn' onClick={() => this.handleItemClick(ittList)} ><FontAwesomeIcon icon={faPenToSquare} /></button></td>
                  </tr>
                  </tbody>
                  ))}
                </table>


                </div>

        </div>

        <div className='editForm'>

        <br/><br/> 
            <label className='lblOne'><h4><b>Item Code : </b></h4></label><input placeholder='I000' type='text' value={this.state.itemCode}
            onChange={(e) => this.setState({ itemCode: e.target.value })} ></input>
            <br/><br/>
            <label className='lblTwo'><h4><b>Item Name : </b></h4></label><input placeholder='Sample' type='text' value={this.state.itemName}
            onChange={(e) => this.setState({ itemName: e.target.value })} ></input>
            <br/><br/>
            <label className='lblThree'><h4><b>Unit Price : </b></h4></label><input placeholder='Rs.000' type='text' value={this.state.price}
            onChange={(e) => this.setState({ price: e.target.value })} ></input>
            <br/><br/>
            <label className='lblFour'><h4><b>Qty On Hand : </b></h4></label><input placeholder='000' type='text' value={this.state.qtyOnHand}
            onChange={(e) => this.setState({ qtyOnHand: e.target.value })} ></input>
            <br/><br/><br/>

            <button className='addBtn'><h6><b>Create New</b></h6></button>
            <br/><br/>
            <button className='updateBtn'><h6><b>Update</b></h6></button>
            <br/><br/>
            <button className='deleteBtn'><h6><b>Delete</b></h6></button>
            <br/><br/>


        </div>



      </div>
    )
  }
}
