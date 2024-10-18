import React, { Component } from 'react'
import spinner from "./spinner.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' style={{marginTop:"200px"}}>
        <img src={spinner} alt="loading" />
      </div>
    )
  }
}

export default Spinner