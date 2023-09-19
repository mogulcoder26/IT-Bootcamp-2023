import Card from "../../components/Cardx"
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
        <div className="text-2xl font-semibold text-white text-center">SOCIETIES</div>
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