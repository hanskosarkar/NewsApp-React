import React, { Component } from 'react';
import loading from "./loading.gif"

export default class Spinner extends Component {
  render() {
    return (
        <div className="h-28">
            <img src={loading} alt="loading" className='mx-auto' />
        </div>
    )
  }
}
