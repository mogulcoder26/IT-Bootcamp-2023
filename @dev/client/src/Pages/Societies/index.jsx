import Card from "../../components/Card"
import Navbar from "../../components/Navbar"
import "./style.css"

export default function Societies() {
    const society = [
        {
            "name": "Cultural Society",
            "about": "Engineering students with a zest for bridging the gap between technology and dancing culture.",
            "secretary": "Hola jan",
            "jointSec1": "Mai hoon jian",
            "jointSec2": "Nobita"
        }
    ]
    return(
        <>
        <Navbar/>
        <h1 className="mt-1 p-2 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl lg:text-5xl flex justify-center">Societies</h1>
        <div className="container1">
            <div className="cardg mt-5 ml-[2.25rem] flex relative w-auto h-auto mx-auto flex-wrap flex-row justify-contents items-center">
                <Card {...society[0]} />
                <Card {...society[0]} />
                <Card {...society[0]} />
                <Card {...society[0]} />
                <Card {...society[0]} />
            </div>
        </div>
    </>
)}