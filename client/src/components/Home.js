import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        Second Home Page
        <br/>

        <button className='btn btn-success'><a href='/adminPage' style={{textDecoration: 'none', color: 'white'}}>As Admin</a></button>
        
        </div>

      
    )
  }
}
