import React, { useEffect, useState } from "react";
import axios from "axios";

function Grocerrylist() {

    const [inputdata, setinputdata] = useState("")
    const[apidata,setapidata] = useState([])

    const handleinput = (e) => {
        setinputdata(e.target.value)
    }

    const handlepost = async () => {
        let body = {
            task: inputdata
        }
        let res = await axios.post("http://localhost:3000/todoList", body)
        handleget()

    }

    const handleget =async () => {
        let res = await axios.get("http://localhost:3000/todoList")
        setapidata(res.data)
    }

    useEffect(()=>{
        handleget()
    },[])

    const handledelete=(id)=>{
        let res = axios.delete("http://localhost:3000/todoList/"+id)
        handleget()
    }

    const handleupdate = async(ind) =>{

        let changedname = prompt("enter ur updated text",apidata[ind].task)

        let newbody = {
            id:apidata[ind].id,
            task:changedname
        }
        let res = await axios.put(`http://localhost:3000/todoList/${apidata[ind].id}`,newbody)
        handleget();


    }


    return (
        <>

            <h1>Grocerrylist</h1>
            <input onChange={handleinput} placeholder="Grocerry" />
            <button onClick={handlepost}>Send</button>


            {apidata.map((da,i)=>(
                <div>
                    <h2>{da.task}</h2>
                    <button onClick={()=>handleupdate(i)} >Update</button>
                    <button onClick={()=>handledelete(da.id)} >Delete</button>
                </div>
            ))}

        </>
    )
}

export default Grocerrylist