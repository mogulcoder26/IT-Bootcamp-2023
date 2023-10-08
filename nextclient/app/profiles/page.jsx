"use client"
// import { useEffect, useState } from "react";
// import Card from "../../components/Card";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation"
// const page = () => {
//     const router = useRouter()

//     const {data:session} = useSession();

//     const [studentData, setStudentData] = useState([]);

//     useEffect(() => {

//         const fetchData = async () => {
//             try {
//                 const res = await fetch("http://localhost:6969/student/profile/it/registered/v0")
//                 const dataArray = await res.json()
//                 setStudentData(dataArray);
//             }
//             catch (e: any) {
//                 alert(e.message);
//             }
//         }
//         fetchData()

//     }, [])
//     if(session){
//         return (
            
//             studentData.map(student => {
//                 console.log(student) 
//                 return (
                    
//                     <div id={student?._id} style={{display:"flex",width:'80%'}}>
//                         <Card name={student?.name}  bio={student?.bio} email = {student?.email}/><br/><br/><br/>
//                     </div>
//                 )
//             })
//         )
//     }
//     else   return(<h1>Loading..</h1>)
    
// }

// export default page
import { useEffect, useState } from "react"
import ProfileCard from "../../components/ProfileCard"

export default function Page() {
    const [studentData, setStudentData] = useState([]);

        useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:6969/student/profile/it/registered/v0")
                const dataArray = await res.json()
                console.log(dataArray)
                setStudentData(dataArray);
            }
            catch (e) {
                alert(e.message);
            }
        }
        fetchData()
    }, [])

    return(
        <>
        <h1 className="mt-1 p-2 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent flex justify-center">Profiles</h1>
        {console.log(studentData)}
        <div className="">
            <div className="flex justify-evenly flex-wrap gap-2 m-4">
                
                {studentData.map((student,key)=>{
                    return(
                        <ProfileCard id={key} props={student} />
                    )
                })}

                {/* <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard /> */}
            </div>
        </div>
    </>
)}