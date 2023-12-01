import React, { useState } from 'react'
import Getcount from './GetCount';
import userContext from '../pages/userContext';
const Count = () => {

    const [increase,setIncrease]=useState(0);

    const increaseCount = () => {
        setIncrease(increase+1);
    }

  return (
        
   <userContext.Provider value={increase}>
    <div>
        <button onClick={increaseCount}>increase</button>
        <Getcount/>
    </div>
    </userContext.Provider>
  
  )
}

export default Count;