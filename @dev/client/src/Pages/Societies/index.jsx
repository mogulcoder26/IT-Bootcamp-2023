import Card from "../../components/Card"
import Navbar from "../../components/Navbar"
import "./style.css"

export default function Societies() {
    return(
        <>
        <Navbar/>
        <div className="text-2xl font-semibold text-white text-center">SOCIETIES</div>
        <div className="container1">
            <div className="cardg mt-5 ml-[2.25rem] flex relative w-auto h-auto mx-auto flex-wrap flex-row justify-contents items-center">
                <Card jointSec1={"Hola"}/>
                <Card jointSec1={"Hola"}/>
                <Card jointSec1={"Hola"}/>
                <Card jointSec1={"Hola"}/>
                <Card jointSec1={"Hola"}/>
            </div>
        </div>
    </>
)}