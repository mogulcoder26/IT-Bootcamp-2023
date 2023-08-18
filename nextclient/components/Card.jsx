"use client"
import { useEffect } from 'react'
const Card = ({name,email,phone,bio}) => {

    return (
        <div>
            ID : B423XXX
            <br />
            Name :   {name}
          <br />
            Email :  {email}        
            <br />
            Phone : {phone}
            <br />
            About : {bio}
        </div>
    )
}
// /student/profile/it/registered/v0
export default Card
