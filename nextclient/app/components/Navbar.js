"use client"

import Link from 'next/link'
import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {

    const { user, googleSignIn, logOut } = UserAuth();

    const handleSignIn = async () => {
        try {
            const res = await googleSignIn();
        } catch (e) {
            alert(e.message);
        }
    }
    const handleSignOut = async () => {
        try {
            await logOut();
            alert("SignedOut")

        } catch (e) {
            alert(e.message);
        }
    }

    return (

        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ul style={{ display: "flex" }}>
                <li className='p-2 cursor-pointer' style={{ margin: "10px" }}>
                    <Link href='/'>Home</Link>
                </li>

                <li className='p-2 cursor-pointer' style={{ margin: "10px" }}>
                    <Link href='/register'>Register</Link>
                </li>

                <li className='p-2 cursor-pointer' style={{ margin: "10px" }}>
                    <Link href='/profile'>Profile</Link>
                </li>

            </ul>
            {!user ? (<li onClick={handleSignIn} className='p-2 cursor-pointer' style={{ margin: "10px" }}>
                Login
                {user}
            </li>
            )
                : (<li onClick={handleSignOut} className='p-2 cursor-pointer' style={{ margin: "10px" }}>
                    Signout
                </li>)}
            <ul style={{ display: "flex" }}>
            </ul>

        </div>
    )
}

export default Navbar
