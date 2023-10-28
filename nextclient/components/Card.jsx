"use client"
import { useEffect } from 'react'

const Card = ({name,email,phone,bio}) => {

    return (
        <div style={{color:"white"}}>
            ID : B423XXX
            <br />
            Name :   {name}
          <br />
            Email :  {email}        
            <br />
            About : {bio}
        </div>
    )
}
// /student/profile/it/registered/v0
export default Card
