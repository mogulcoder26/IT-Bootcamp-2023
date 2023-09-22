"use client";
import { useSession } from "next-auth/react";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";

const page = () => {
  const { data: session } = useSession();

  const router = useRouter();

  if (!session) return <h1>Loading...</h1>;
  else
    return (
      <>
      {console.log("session = ",session)}
        <Card
          name={session?.user?.name}
          email={session?.user?.email}
        />
        <img src={session?.user?.image} alt="" />
      </>
    );
};

export default page;
