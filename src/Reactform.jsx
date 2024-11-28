import React, { useState } from 'react';


let count = 0
export default function Reactform() {

    count++

    const [name, setname] = useState("")

    console.log(count);

    const handlename = (e) => {
        setname(e.target.value)
    }


    const [age, setage] = useState("")
    const handleage = (e) => {
        setage(e.target.value)
    }


    const [email, setemail] = useState("")
    const handleemail = (e) => {
        setemail(e.target.value)
    }


    return (
        <>
            <h1>Form</h1>

            <input onChange={handlename} placeholder="Enter ur name" />
            <h1>
                {name}
            </h1>
            <br></br>

            <input onChange={handleage} placeholder="Enter ur Age" />
            <h1>
                {age}
            </h1>
            <br></br>

            <input onChange={handleemail} placeholder="Enter ur Email" />
            <h1>
                {email}
            </h1>




        </>
    )
}