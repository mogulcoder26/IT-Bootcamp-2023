"use client";
import { useSession } from "next-auth/react"

const Profilecard = () => {

    const {data : session} = useSession();

    return (
        <center>
        <div>
            Name : {session?.user?.name}
            Email : {session?.user?.email}
            <img src= {session?.user?.image} alt='Profile Picture' />
        </div>
        </center>
    )
}

export default Profilecard
