import { useState } from "react";





const SearchBox = ({onSubmit}) => {

    const [term1,setTerm]=useState();
       
    const handleInput = (e) => {
            setTerm(e.target.value);
    }

    const handleSearchClick = () => {
           onSubmit(term1);
    }

        return (
            <div className="my-5">
                <div>
                     <input type="text" className="p-3 bg-[#f0f0f0] border-none rounded-lg mx-4" onChange={handleInput} value={term1} />
                     <button className="bg-blue-950 text-white rounded-xl border-none px-4 py-2" onClick={handleSearchClick}>search</button>
                </div>
            </div>
        )
}
export default SearchBox;