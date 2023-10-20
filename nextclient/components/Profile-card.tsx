"use client";
import { useSession } from "next-auth/react";
import Image from 'next/image';

const Profilecard = () => {
    const { data: session } = useSession();

    return (
        <center>
            <div>
                Name: {session?.user?.name}
                Email: {session?.user?.email}
                {session?.user?.image ? (
                    <Image src={session.user.image} alt="Profile Picture" width={100} height={100} />
                ) : (
                    <p>No profile picture available</p>
                )}
            </div>
        </center>
    );
}

export default Profilecard;
