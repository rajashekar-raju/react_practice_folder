import React from 'react'
import { useSelector } from 'react-redux';

const GetInfo = () => {

    const selector = useSelector((store)=>store.app.items);

  return (
    <div>
        {selector.length}
    </div>
  )
}

export default GetInfo;