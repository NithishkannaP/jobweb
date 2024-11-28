import React, { useState } from "react";
import CartPage from "./Component/CartPage";
import ProductPage from "./Component/ProductPage";
import { CounterProvider } from "./context/CounterContext";
// import ListRender from "./Component/ListRender";
// import Nk from "./Component/Nk";
// import Apicall from "./Apicall";
// import Reactform from "./Reactform";
// import Hookform from "./Component/hookform";
// import Pro1 from "./Component/Pro1";
// import './Component/One.css';
// import Pro2 from "./Component/Pro2";
// import './Component/Two.css';
// import Figma from "./Component/Figma";
// import './Component/Figstyle.css';
// import Grocerrylist from "./Component/Grocerrylist";

function App() {

  // const [log,setlog] = useState(true)

  // const handlelogout =()=>{
  //   setlog(false)
  // }


  return (
    <>
      {/* <h1>Nithish</h1>
    <h1>hi</h1> */}
      {/* <Nk/> */}

      {/* <ListRender/> */}
      {/* <Reactform/> */}
      {/* <Hookform/> */}
      {/* <Pro1/> */}
      {/* <Pro2/> */}
      {/* <Figma/> */}
      {/* <Grocerrylist/> */}

      <h1>Context</h1>

      <CounterProvider>

        <CartPage />
        <ProductPage />

      </CounterProvider>

      {/* <button onClick={handlelogout}>Logout</button> */}

      {/* {log ? <Apicall/> : null} */}

    </>
  )
}

export default App