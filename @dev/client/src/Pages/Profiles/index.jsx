import ProfileCard from "../../components/ProfileCard"
import Navbar from "../../components/Navbar"

export default function Profiles() {
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
        <h1 className="mt-1 p-2 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent flex justify-center">Profiles</h1>

        <div className="flex gap-2">
            <div className="m-2 ml-2 mr-2 flex flex-wrap justify-around items-center gap-2">
                <ProfileCard {...society[0]} />
                <ProfileCard {...society[0]} />
                <ProfileCard {...society[0]} />
                <ProfileCard {...society[0]} />
                <ProfileCard {...society[0]} />
                <ProfileCard {...society[0]} />
                <ProfileCard {...society[0]} />
            </div>
        </div>
    </>
)}