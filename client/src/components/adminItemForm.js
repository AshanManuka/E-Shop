import React, { Component } from 'react';
import './../css/adminItem.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';


export default class adminItemForm extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          itemList : []          
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
 
    render() {
    return (
      <div>
        
        <Routes>
        <Route path='/' exact Component={NavBar}></Route>
        </Routes>

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
                    <td><button className='delBtn'><FontAwesomeIcon icon={faDeleteLeft} /></button></td>
                  </tr>
                  </tbody>
                  ))}
                </table>


                </div>

        </div>

        <div className='editForm'>

        <br/><br/> 
            <label className='lblOne'><h4><b>Item Code : </b></h4></label><input placeholder='I000' type='text'></input>
            <br/><br/>
            <label className='lblTwo'><h4><b>Item Name : </b></h4></label><input placeholder='Sample' type='text'></input>
            <br/><br/>
            <label className='lblThree'><h4><b>Unit Price : </b></h4></label><input placeholder='Rs.000' type='text'></input>
            <br/><br/>
            <label className='lblFour'><h4><b>Qty On Hand : </b></h4></label><input placeholder='000' type='text'></input>
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
