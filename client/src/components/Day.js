import React from 'react'

function Day({ereignisse}){
    return(
        <ul>
            {ereignisse.map((x)=>{
                return <li key={x}>{x}</li>
            })}
        </ul>
    )
}
export default Day;