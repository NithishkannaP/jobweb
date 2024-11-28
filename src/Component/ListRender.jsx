import React,{useState} from "react";
function ListRender(){
    const [data,setdata]=useState([
        {
            name: "Nithish",
            age: 20,
            carimg:"https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/139133/aura-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
        },
        {
            name: "Jeevish",
            age: 18,
            carimg:"c:\NK\HD-wallpaper-priyanka-arul-mohan-priyanka-arul-mohan-tollywood.jpg",
        },
        {
            name: "Jeni",
            age: 19,
            carimg:"https://stat.overdrive.in/wp-content/uploads/2017/02/2017-Hyundai-Grand-i10-14.jpg",
        },
    ]);
    return(
        <>
        <h1>List Render</h1>
        {data.map((da)=>(
            <div>
                <h1>{da.name}</h1>
                <h3>{da.age}</h3>
                <img height={200} width={200} src={da.carimg}/>
            </div>
        ))}
        </>
    );
}
export default ListRender

