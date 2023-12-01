import React from 'react'
import { useState } from 'react'

const Accordion = () => {

    const [openClose,setOpenClose]=useState(false);
    const [secondopenClose,setSecondOpenClose]=useState(false);
    const [thirdopenClose,setThirdOpenClose]=useState(false);

    const handleOpenClick = () => {
        setOpenClose(!openClose);
    }

    const secondhandleOpenClick = () => {
        setSecondOpenClose(!secondopenClose);
    }

    const thirdhandleOpenClick = () => {
        setThirdOpenClose(!thirdopenClose);
    }

  return (
    <div>
        <div className='bg-[#f0f0f0] w-6/12 m-auto  my-10 p-3'>
           <div className='flex justify-between cursor-pointer' onClick={handleOpenClick}>
              <div><h3>#item1</h3></div>
              <div>{"🔽"}</div>
           </div>
           {openClose && <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sint vitae perspiciatis asperiores provident nobis voluptates. Quae optio veritatis in expedita et recusandae reprehenderit nemo quasi incidunt saepe, facilis odit.</p></div>}
        </div>
        <div className='bg-[#f0f0f0] w-6/12 m-auto  my-10 p-3'>
           <div className='flex justify-between cursor-pointer' onClick={secondhandleOpenClick}>
              <div><h3>#item2</h3></div>
              <div>{"🔽"}</div>
           </div>
           {secondopenClose && <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sint vitae perspiciatis asperiores provident nobis voluptates. Quae optio veritatis in expedita et recusandae reprehenderit nemo quasi incidunt saepe, facilis odit.</p></div>}
        </div>
        <div className='bg-[#f0f0f0] w-6/12 m-auto  my-10 p-3'>
           <div className='flex justify-between cursor-pointer' onClick={thirdhandleOpenClick}>
              <div><h3>#item3</h3></div>
              <div>{"🔽"}</div>
           </div>
           {thirdopenClose && <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sint vitae perspiciatis asperiores provident nobis voluptates. Quae optio veritatis in expedita et recusandae reprehenderit nemo quasi incidunt saepe, facilis odit.</p></div>}
        </div>
    </div>
  )
}

export default Accordion;