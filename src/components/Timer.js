import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [time,updateTime]=useState(new Date());

    useEffect(() => {
        // timer updation logic
        const timer = setInterval(() => {
          updateTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
      }, []);

  return (

    <div>
        <span>{time.toLocaleTimeString()}</span>
    </div>
  )
}

export default Timer