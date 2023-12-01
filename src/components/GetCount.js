import React from 'react'
import { useContext } from 'react';
import userContext from '../pages/userContext';

const Getcount = () => {

    const value = useContext(userContext);

  return (

    <div>
        {value}
    </div>
  )
}

export default Getcount;