"use client"
import { motion } from "framer-motion"
import FaviconCR from "../components/FaviconCR"
import Footer from "../components/Footer"
import image from "./images"
import { useState } from "react"

export default function HomePage() {

    const [index, setIndex] = useState(0)

    function slideShow() {
        if(index == 3) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    setTimeout(() => {
        slideShow()
    }, 5000);

    const variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        transition: {
            duration: 3,
        }
    }

    return (
        <>
            <div className="justify-center">
            <h1 className="mt-1 p-2  bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl lg:text-5xl flex justify-center">Welcome to Information Technology</h1>
            <br /><br />
            <motion.div 
                initial={{translateY: 15}}
                animate={{ translateY: 0 }}
                transition={{duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "linear"}}
                className="text-white flex flex-col justify-center -mt-10 mb-10">
                        <center>
                        <br />
                        <svg width="200" height="200" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.9141 101.466H40.1077C44.8287 102.99 49.8645 103.814 55.0927 103.814C82.0006 103.814 103.814 82.0003 103.814 55.0924C103.814 47.9454 102.275 41.1569 99.5104 35.0418H106.25L106.309 35.0193C108.731 41.2206 110.06 47.9704 110.06 55.03C110.06 85.422 85.4224 110.06 55.0302 110.06C46.6776 110.06 38.7598 108.199 31.6689 104.868V104.799V24.0483H39.9141V101.466Z" fill="white"/>
                            <path d="M78.8912 32.1685C78.8912 33.8225 78.8912 67.7824 78.8912 81.6393C78.8912 87.0948 74.4775 91.5084 69.022 91.5084C69.022 78.5673 69.022 32.106 69.022 32.106V32.0436C57.2701 32.0436 46.2129 32.0436 45.2859 32.0436V32.0236C45.2859 30.086 45.2859 23.9858 45.2859 23.9858L45.3484 23.9234H92.5394C83.6034 13.1972 70.1451 6.37124 55.0926 6.37124C28.1847 6.37124 6.37126 28.1846 6.37126 55.0924C6.37126 72.0012 14.985 86.8987 28.0635 95.6348L28.171 95.7559V99.3788V103.002L28.071 103.015C11.3159 93.5822 0 75.6278 0 55.03C0 24.6379 24.638 0 55.0302 0C77.2247 0 96.3509 13.1397 105.053 32.0636L105.001 32.1685H78.8912Z" fill="white"/>
                            <path d="M31.6691 104.799V104.867C31.6529 104.86 31.6354 104.852 31.6191 104.845C31.6191 104.845 31.6366 104.829 31.6691 104.799Z" fill="white"/>
                        </svg>
                        </center>
            </motion.div>
            <motion.div className="flex flex-wrap gap-4 justify-around" style={{maxWidth:"60%",margin:"auto",marginTop:"80px",marginBottom:"60px"}}>
                <a href="/2022">
                    <FaviconCR year="2022" tag="Sophomores"/>
                </a>
                <a href="/2023">
                    <FaviconCR year="2023" tag="Freshers"/>
                </a>
            </motion.div>

            <motion.h1
             initial={{translateX: 100, opacity: 0}}
            animate={{ translateX: 0 , opacity: 1}}
            transition={{duration: 1}}
             className="mt-2 mb-2 p-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-semibold tracking-tighter text-transparent sm:text-5xl lg:text-5xl flex justify-center">Moments</motion.h1>

            <div className="flex justify-center mt-2 mb-10">
            <div className="relative w-4/5 h-[480px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600"/>
                <div className="flex justify-center h-full w-full">
                    <div className="flex justify-center items-center w-full overflow-hidden">
                        <motion.img 
                        variants = {variants}
                        animate = "animate"
                        initial = "initial"
                        transition = "transition"
                        key = {index}
                        src={image[index]} alt="Image 1" className="w-full h-full rounded-2xl m-0 p-2"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer />
    </>
    
)}