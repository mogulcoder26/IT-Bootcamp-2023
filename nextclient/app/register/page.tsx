"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const page = () => {

    const {data:session} = useSession();
    const [name,setName]  = useState(null || " ");
    const [bio,setBio]  = useState(null || " ");
    const [click,setClick]  = useState(false);
    const [student_pic,setStudent_pic] = useState(null);
    const studentID  = 'B'+ session?.user?.email?.slice(1,7) || " "

    useEffect(()=>{

        async function sendStudentData() {
        if(click==true)
        try {
        alert("Form Sending");

                const studentInfo = {
                    name,
                    bio,
                    "email":session?.user?.email,
                    id:studentID
                }
                console.log(studentInfo)
                const res = await fetch("http://127.0.0.1:6969/register/profile/it/securev0",{
                    method:"POST",
                    body: JSON.stringify(studentInfo),
                    headers: {
                        'Content-Type': 'application/json'
                    }})
                console.log(res.status);
            }catch(e :any) {
                alert(e.message);
            }
        }
        sendStudentData();
        
        setClick(false)
    },[click])

  return (
    <div style={{color:"red",}}>
        <form onClick={(e)=>e.preventDefault()} action="" >
            <label htmlFor="name">Name :</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="name" id="" placeholder="Enter Your Name"/><br /><br />
            
            <label htmlFor="name">ID :</label>
            <input type="text" name="id" value={'B'+ session?.user?.email?.slice(1,7)} placeholder="Student ID" id="" /><br /><br />
            
            <label htmlFor="name">Bio :</label>
            <textarea value={bio} onChange={(e)=>setBio(e.target.value)} name="bio" id="" placeholder="Enter A Sweet Message!"/><br /><br />

            <label htmlFor="name">Image :</label>
            <input type="file"  accept="image/*" onChange={(e)=>setStudent_pic(e.target.files[0])} name="bio" id=""/><br /><br />
            <button type="submit" onClick={()=>{setClick((prev)=>!prev)}}>Click</button>
        </form>
    
    </div>
  );
};

export default page;
