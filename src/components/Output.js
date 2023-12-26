import React from 'react'
import { useSelector } from 'react-redux'

const Output = () => {
    const student_details = useSelector(store=>store.details?.info)
    const {name,college,location}=student_details;
    if(!student_details) return;
  return (
    <div>
        <h1>name:{name}</h1>
        <h1>college:{college}</h1>
        <h1>location:{location}</h1>
    </div>
  )
}

export default Output