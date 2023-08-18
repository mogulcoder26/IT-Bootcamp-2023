"use client"
import { useSession } from "next-auth/react"
import Card from "@/components/Card"
import { useRouter } from "next/navigation"
import Image from "next/image"
const page = () => {
    const { data: session } = useSession();
    const router = useRouter();

    if (!session) {
        alert("Sign In to view this page");
        router.push("/");
    }
    else {
        return (
            <>
                <Card name={session.user?.name} email={session.user?.email} phone={null} bio={null} />
                <img src={session.user?.image} alt="" />
            </>
        )
    }
}

export default page
