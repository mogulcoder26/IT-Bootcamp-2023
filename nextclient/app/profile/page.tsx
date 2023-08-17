"use client"
import { useSession } from "next-auth/react"
import Card from "@/components/Card"
import { useRouter } from "next/navigation"
const page = () => {
    const { data: session } = useSession();
    const router = useRouter();

    // if (!session) {
    //     alert("Sign In to view this page");
    //     router.push("/");
    // }


    return (
        <Card />
    )
}

export default page
