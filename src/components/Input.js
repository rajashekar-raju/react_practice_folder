import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addInfo } from '../pages/detailsSlice';

const Input = () => {

    const [name,setName]=useState();
    const [college,setCollege]=useState();
    const [location,setLocation]=useState();
    const [plus,setPlus]=useState(null);
    // const [minus,setMinus]=useState(0);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const movetoOutput = () => {
        navigate("/output")
    }

    const nameFunction = (e) => {
        setName(e.target.value);
        // dispatch(addInfo(name))
    }
    const collegeFunction = (e) => {
        setCollege(e.target.value)
        // dispatch(addInfo(college))
    }
    const locationFunction = (e) => {
        setLocation(e.target.value);
        // dispatch(addInfo(location))
    }

    dispatch(addInfo({
        name:name,
        college:college,
        location:location,
    }))

    const increase = () => {
        setPlus(plus+1);
    }
    const decrease = () => {
        setPlus(plus-1);
    }

  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
            <label>Enter Name:</label>
            <input type="text" placeholder='name' onChange={nameFunction}/><br />
            <label htmlFor="">Enter college Name</label>
            <input type="text" placeholder='college name' onChange={collegeFunction}/><br />
            <label htmlFor="">Enter Location</label>
            <input type="text" placeholder='location' onChange={locationFunction}/><br />
        </form>
        <button onClick={movetoOutput} className='bg-red-800 text-white rounded-lg border-collapse px-4 py-2'>submit</button>

        <div>
            <div>
                {plus<0?0:plus}
            </div>
            <button onClick={increase}>Plus</button>
            <button onClick={decrease}>minus</button>
        </div>
    </div>
  )
}

export default Input;