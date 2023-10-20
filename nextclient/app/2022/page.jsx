"use client"
import { useEffect, useState } from "react"
import ProfileCard from "../../components/ProfileCard"

export default function Page() {
    const [studentData, setStudentData] = useState([]);

        useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch("http://65.0.107.166:6969/student/profile/it/registered/2022")
                let dataArray = await res.json()
                console.log("students22 = ",dataArray)
                dataArray = await dataArray.sort((a,b)=>{
                  
                        if (a.name < b.name) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                        return 0;
                })
                console.log("sorted arr ::",dataArray);
                setStudentData(dataArray);
            }
            catch (e) {
                alert("ok")
                alert(e.message);
            }
        }
        fetchData()
    }, [])
    return(
        <>
        <h1 className="mt-1 p-2 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent flex justify-center">Profiles</h1>
        <div className="">
            <div className="flex justify-evenly flex-wrap gap-2 m-4">
                
                {studentData.map((student,key)=>{
                    return(
                        <>
                        <ProfileCard id={key} props={student} />
                        </>
                    )
                })}
            </div>
        </div>
    </>
)}