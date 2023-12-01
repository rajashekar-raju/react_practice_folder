import { useEffect,useState } from "react";
import axios from "axios";
import Image from "./Image";

const Images = ({image}) => {

    const [picture,setPicture]=useState();

    useEffect(()=>{
        dataFetch()
    },[]);

    const dataFetch = async () => {
      const data = await axios.get("https://api.unsplash.com/photos",{
            headers: {
                Authorization: 'Client-ID qBWB7wzLApiZNBr7EA3j0vem2upQt0sqgiIg6zwb1Co'
            },
            params:{
                query: image
            }
        })
        // console.log(data);
        setPicture(data);
    }


    return (
        <div>
           <Image info={picture}/>
        </div>
    )
}
export default Images;
