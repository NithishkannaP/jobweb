import React, {useState} from "react";

function Count(){
    const [count, setcount] = useState(1)
    const handleadd = ()=>{
        setcount(count + 1)
    };
    const handlesub = ()=>{
        setcount(count-1)
    };
    return(
        <>
        <h3>Count - {count}</h3>
        <button onClick={handleadd}>Add</button>
        <button onClick={handlesub}>minus</button>
        </>
    );
}

export default Count;