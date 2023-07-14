import React, { Component } from 'react'


export default class Home extends Component {
  
  render() {
    return (
      <div>
        <br/>
        <h1 style={{color:"blue"}}>| Welcome to the CoMaZZ Online Shopping Store</h1>
        <br/>
         
        <div className='leftDiv'>
        <h2 style={{color:"red"}}>Categories..</h2>
        <br/>
        
        <div>
      
    </div>

        </div>

        <br/><br/><br/>
      
      

        <br/><br/><br/>


        <button className='btn btn-success'><a href='/userPage' style={{textDecoration: 'none', color: 'white'}}>Customer Data</a></button>
        <br/><br/>
        <button className='btn btn-success'><a href='/itemPage' style={{textDecoration: 'none', color: 'white'}}>Item Data</a></button>
        </div>

      
    )
  }
}
