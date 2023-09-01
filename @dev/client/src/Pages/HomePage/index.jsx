import Navbar from "../../components/Navbar"
import { motion } from "framer-motion"
import FaviconCR from "../../components/faviconCR"
import Footer from "../../components/Footer"
import image from "./images"
import React from "react"

export default function HomePage() {

    const [index, setIndex] = React.useState(0)

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
        <Navbar/>
            <div className="justify-center">
            <h1 className="mt-1 p-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl lg:text-5xl flex justify-center">Welcome to Information Technology</h1>
            <motion.div 
                initial={{translateY: 15}}
                animate={{ translateY: 0 }}
                transition={{duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "linear"}}
                className="text-white flex flex-col justify-center -mt-10 mb-10">
                    <img src="/landHero.png" alt="Hero image" className="w-2/5 h-2/5"/>
            </motion.div>
            <motion.div
            className="flex flex-wrap gap-4 justify-around">
                <FaviconCR />
                <FaviconCR />
                <FaviconCR />
                <FaviconCR />
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