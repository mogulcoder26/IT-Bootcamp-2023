import { motion } from "framer-motion"

export default function FaviconCR({year,tag}) {
    return (
        <>
        <motion.div whileHover={{scale: 1.1, cursor: "pointer"}} className="flex flex-col gap-4">
            <div className="relative w-[200px] h-[200px] rounded-lg overflow-hidden">
                <motion.div
                    className="absolute -inset-10 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600"
                    style={{ rotate: '0deg' }}
                    animate={{ rotate: '360deg' }}
                    transition={{ duration: 0.9, repeat: Infinity, ease:"linear" }}
                />
                <div className="flex justify-center h-full w-full">
                    <div className="flex flex-col rounded-lg items-center font-bold text-2xl justify-center text-white bg-black h-[99] w-full z-50 m-2">
                    Batch {year}
                    <div className="font-medium text-2xl">{tag}</div>
                    </div>
                </div>
            </div>
        </motion.div>
        </>
    )
}