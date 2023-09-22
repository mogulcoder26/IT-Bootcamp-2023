import ProfileCard from "../../components/ProfileCard"
import Navbar from "../../components/Navbar"

export default function Profiles() {
    return(
        <>
        <Navbar/>
        <h1 className="mt-1 p-2 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent flex justify-center">Profiles</h1>

        <div className="">
            <div className="flex justify-evenly flex-wrap gap-2 m-4">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </div>
        </div>
    </>
)}