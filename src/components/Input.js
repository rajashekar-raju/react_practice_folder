import { useState } from "react";

const Input = () => {

    const [color,setColor]=useState();
    const [color1,setColor1]=useState();

    const colorSetter = (e) => {
        setColor(e.target.value);
    }
    const colorSearch = () => {
        setColor1(color);
    }
    

    return (
        <div>
            <div>
               <input type="text" placeholder="Search...." className="px-6 py-3 bg-[#f0f0f0] border-none" onChange={colorSetter} />
               <button onClick={colorSearch}>Search</button>
            </div>
            <div style={{backgroundColor:color1,height:'400px',width:'400px'}}>
                
            </div>
        </div>
    )
}
export default Input;