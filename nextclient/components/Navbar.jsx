"use client"
import { useSession } from 'next-auth/react'
import SigninButton from './SigninButton'
import './index.css'
import { useState } from 'react';



export default function Navbar() {
    const { data: session } = useSession();


    return (
        <nav className="bg-transparent">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                <svg width="50" height="50" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.9141 101.466H40.1077C44.8287 102.99 49.8645 103.814 55.0927 103.814C82.0006 103.814 103.814 82.0003 103.814 55.0924C103.814 47.9454 102.275 41.1569 99.5104 35.0418H106.25L106.309 35.0193C108.731 41.2206 110.06 47.9704 110.06 55.03C110.06 85.422 85.4224 110.06 55.0302 110.06C46.6776 110.06 38.7598 108.199 31.6689 104.868V104.799V24.0483H39.9141V101.466Z" fill="white"/>
                    <path d="M78.8912 32.1685C78.8912 33.8225 78.8912 67.7824 78.8912 81.6393C78.8912 87.0948 74.4775 91.5084 69.022 91.5084C69.022 78.5673 69.022 32.106 69.022 32.106V32.0436C57.2701 32.0436 46.2129 32.0436 45.2859 32.0436V32.0236C45.2859 30.086 45.2859 23.9858 45.2859 23.9858L45.3484 23.9234H92.5394C83.6034 13.1972 70.1451 6.37124 55.0926 6.37124C28.1847 6.37124 6.37126 28.1846 6.37126 55.0924C6.37126 72.0012 14.985 86.8987 28.0635 95.6348L28.171 95.7559V99.3788V103.002L28.071 103.015C11.3159 93.5822 0 75.6278 0 55.03C0 24.6379 24.638 0 55.0302 0C77.2247 0 96.3509 13.1397 105.053 32.0636L105.001 32.1685H78.8912Z" fill="white"/>
                    <path d="M31.6691 104.799V104.867C31.6529 104.86 31.6354 104.852 31.6191 104.845C31.6191 104.845 31.6366 104.829 31.6691 104.799Z" fill="white"/>
                    </svg>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <span className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-bold tracking-tighter text-transparent">Bootcamp</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="w-full md:block md:w-auto" id="navbar-default">
                    <ul
                        className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent">
                        <li>
                            <a href="/"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                aria-current="page">Home</a>
                        </li>
                        {session ? (<li>
                            <a href="/2022"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Batch 2022</a>
                        </li>) : (null)}
                        {session ? (<li>
                            <a href="/2023"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Batch 2023</a>
                        </li>) : (null)}

                        <li>
                            <a href="/societies"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Societies</a>
                        </li>
                        <li>
                            <a href="/team"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                aria-current="page">Team</a>
                        </li>
                        {session?.user?.email[1] == 4 ? (<li>
                            <a href="/register"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Register</a>
                        </li>) : (null)}
                        <li>
                            <a href="/user"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><SigninButton /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}