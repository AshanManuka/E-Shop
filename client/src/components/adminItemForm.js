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



      </div>
    )
  }
}
