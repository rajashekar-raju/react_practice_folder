import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItems } from '../pages/appSlice';

const Button = () => {

    const dispatch = useDispatch();

    const [add,setAdd]=useState(0);

    const valueIncrease = () => {
        setAdd(add+1);
        dispatch(addItems());
    }

  return (
    <div>
        <button onClick={valueIncrease}>button</button>
    </div>
  )
}

export default Button;