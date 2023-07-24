import React from 'react';
import loading from "./loading.gif"

const Spinner = () => {

  return (
    <div className="h-28">
      <img src={loading} alt="loading" className='mx-auto' />
    </div>
  )

}

export default Spinner;
