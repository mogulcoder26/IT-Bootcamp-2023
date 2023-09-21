"use client";
import { useSession } from "next-auth/react";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";



const page = () => {
  const { data: session } = useSession();
  const router = useRouter();


useEffect(()=>{

    function alerter(){
        alert("Sign In To View This Page")
        router.push("/")
    }

    if(!session) {
        setTimeout(alerter,3000);
    }

},[])

  if(!session) return(
    <h1>Loading...</h1>
  )
  else
    return (
        <>
            <Card
            name={session?.user?.name}
            email={session?.user?.email}
            phone={null}
            bio={null}
            />
            <img src={session?.user?.image} alt="" />
        </>
    );
  }

export default page;
