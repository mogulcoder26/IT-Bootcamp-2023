"use client"
import { useSession } from "next-auth/react"
import Profilecard from "@/components/Profile-card"
import { useRouter } from "next/navigation"
const page = () => {
    const {data : session} = useSession();
    const router = useRouter();
    if(!session){
    alert("Sign In to view this page");
    router.push("/");
    }
    return (
        <Profilecard />
    )
}

export default page
