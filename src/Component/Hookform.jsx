import React from "react";

import { useForm } from "react-hook-form";


export default function Hookform() {

    const {register, handleSubmit , formState:{errors}} = useForm()
    const onsubmit = (data) => {
        console.log(data);
        
    }
    
    

    return (
        <>
            <label>First name</label>
            <input {...register("firstname",{register:"name is required"})} placeholder="enter ur name"></input>
            <p>{errors?.firstname?.message}</p>
            <br />
            <br />
            

            <label>Age</label>
            <input {...register("age",{register:"age is required"})} placeholder="enter ur Age"></input>
            <p>{errors?.age?.message}</p>
            <br />
            <br />

            <label>Email</label>
            <input {...register("mail",{register:"mail is required"})} placeholder="enter ur mail"></input>
            <p>{errors?.mail?.message}</p>
            <br /><br />
            <button onClick={handleSubmit(onsubmit)} >Submit</button>
        </>
    )
}