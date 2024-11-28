import React,{useEffect, useState} from "react";

export default function Apicall() {

    const [apidata,setapidata] = useState([])

    const [count,setcount] = useState(0)

    const handlefetch = async () => {
        let res = await fetch ("https://fakestoreapi.com/products");
        let data = await res.json();
        setapidata(data);
        console.log("N");
        

    };
    

    useEffect(()=>{
        handlefetch()

    return () =>{
        console.log("welcome");
        
    }        

    },[count])



    return (
        <>
            <h1>Api call</h1>
            <button onClick={handlefetch}>Call Api</button>

            {apidata.map((da) =>(
                <div>
                    <img height={200} width={200} src={da.image}/>
                    <h1>{da.title}</h1>
                    <p>{da.price}</p>
                </div>
            ))}
        </>
    )
}