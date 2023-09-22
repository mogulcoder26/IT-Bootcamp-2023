"use client"
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"
const page = () => {
    const router = useRouter()

    const {data:session} = useSession();

    const [studentData, setStudentData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:6969/student/profile/it/registered/v0")
                const dataArray = await res.json()
                setStudentData(dataArray);
            }
            catch (e: any) {
                alert(e.message);
            }
        }
        fetchData()

    }, [])
    if(session){
        return (
            
            studentData.map(student => {
                console.log(student) 
                return (
                    
                    <div id={student?._id} style={{display:"flex",width:'80%'}}>
                        <Card name={student?.name}  bio={student?.bio} email = {student?.email}/><br/><br/><br/>
                    </div>
                )
            })
        )
    }
    else   return(<h1>Loading..</h1>)
    
}

export default page
