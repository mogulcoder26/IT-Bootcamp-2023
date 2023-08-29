"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
const page = () => {
    const router = useRouter();

    // if () {
    //     alert("Sign In to view this page");
    //     router.push("/");
    // }
    
        return (
            <>
                <h1>profile</h1>
                {/* <Card name={session.user?.name} email={session.user?.email} phone={null} bio={null} />
                <img src={session.user?.image} alt="" /> */}

            </>
        )
    
}

export default page
