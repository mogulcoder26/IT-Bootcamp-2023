import { motion } from "framer-motion"

export default function FaviconCR() {
    return (
        <>
        <div className="flex flex-col gap-4">
            <div className="relative w-[200px] h-[200px] rounded-[200px] overflow-hidden">
            <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600"
                style={{ rotate: '0deg' }} // Initial rotation angle
                animate={{ rotate: '360deg' }} // Rotate 360 degrees
                transition={{ duration: 0.9, repeat: Infinity, ease:"linear" }}
            />
            <div className="flex justify-center items-center">
                <img
                src="/tars_iiit_bh_logo 1.png"
                alt="Logo"
                className="w-[180px] h-[180px] rounded-[180px]"
                />
            </div>
            </div>
            <h1 className="text-white font-semibold max-w-[200px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
        </div>
        </>
    )
}