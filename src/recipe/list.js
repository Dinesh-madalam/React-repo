import React from "react"

const CustomList = ({array}) =>{
    
    return(
        <>
            <ul>
                {array.map((each,index)=>(
                    <li key={index}>{each}</li>
                ))}            
            </ul>
        </>
    )
}

export default CustomList;