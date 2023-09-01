import Navbar from "../../components/Navbar"
import { motion } from "framer-motion"
import FaviconCR from "../../components/faviconCR"

export default function HomePage() {
    return (
        <>
        <Navbar/>
        <div className="justify-center">
        <h1 className="mt-1 p-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl lg:text-5xl flex justify-center">Welcome to Information technology</h1>
        <motion.div 
            initial={{translateY: 15}}
            animate={{ translateY: 0 }}
            transition={{duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "linear"}}
            className="text-white flex flex-col justify-center -mt-10 mb-10">
                <img src="/landHero.png" alt="Hero image" className="w-2/5 h-2/5"/>
        </motion.div>
        <div className="p-2 mb-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-5xl lg:text-5xl flex justify-center">Our Present CRs</div>
        <div className="flex flex-wrap gap-4 justify-around">
            <FaviconCR />
            <FaviconCR />
            <FaviconCR />
            <FaviconCR />
        </div>
        <div className="flex flex-wrap gap-4 m-4 justify-around">
            <FaviconCR />
            <FaviconCR />
            <FaviconCR />
            <FaviconCR />
        </div>
        </div>
    </>
)}