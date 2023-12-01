import React from "react";
// import Accordion from "./components/Accordion";
// import SearchBox from "./components/SearchBox";
// import Images from "./components/Images";
// import Input from "./components/Input";
// import Count from './components/Count'
import Button from "./components/Button";
import { Provider } from "react-redux";
import appStore from "./pages/appStore";
import GetInfo from "./components/GetInfo";

function App() {

  // const [image,setImage] = useState();

  // const gettermFunction = (term1) => {
  //       setImage(term1);
  // }




  return (
    <div>
       {/* <Accordion/> */}
       {/* <SearchBox onSubmit={gettermFunction}/>
       <Images image={image}/> */}
       {/* <Input/> */}

        {/* 2nd practice */}{/* <Count/> */}
       <Provider store={appStore}>
            <Button/>
            <GetInfo/>
       </Provider>



    </div>
  );
}

export default App;
