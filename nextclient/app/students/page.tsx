"use client"
import { useEffect, useState } from "react";
import Card from "../../components/Card";

const page = () => {

    const [studentData, setStudentData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:6969/student/profile/it/registered/v0")
                const dataArray = await res.json()
                setStudentData(dataArray);
            }
            catch (e: unknown) {
                alert(e.message);
            }
        }
        fetchData()

    }, [])
    /**
     * : 
    bio
    : 
    "allaah duhai hai"
    email
    : 
    "skg1234@test.com"
    name
    : 
    "Soubhik-test"
    phone
    : 
    "1234567890"
    __v
    : 
    0
    _id
    : 
    "64de3fff7c9c8e443ff
     */
    return (
        studentData.map(student => {
            console.log(student) 
            return (
                <div>
                    <Card />
                </div>
            )
        })
    )
}

export default page
