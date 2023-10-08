"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

// const page = () => {

//     const {data:session} = useSession();
//     const [name,setName]  = useState(null || " ");
//     const [bio,setBio]  = useState(null || " ");
//     const [click,setClick]  = useState(false);
//     const [student_pic,setStudent_pic] = useState(null);
//     const studentID  = 'B'+ session?.user?.email?.slice(1,7) || " "

//     useEffect(()=>{

//         async function sendStudentData() {
//         if(click==true)
//         try {
//         alert("Form Sending");

//                 const studentInfo = {
//                     name,
//                     bio,
//                     "email":session?.user?.email,
//                     id:studentID
//                 }
//                 console.log(studentInfo)
//                 const res = await fetch("http://127.0.0.1:6969/register/profile/it/securev0",{
//                     method:"POST",
//                     body: JSON.stringify(studentInfo),
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }})
//                 console.log(res.status);
//             }catch(e :any) {
//                 alert(e.message);
//             }
//         }
//         sendStudentData();

//         setClick(false)
//     },[click])

//   return (
//     <div style={{color:"red",}}>
//         <form onClick={(e)=>e.preventDefault()} action="" >
//             <label htmlFor="name">Name :</label>
//             <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="name" id="" placeholder="Enter Your Name"/><br /><br />

//             <label htmlFor="name">ID :</label>
//             <input type="text" name="id" value={'B'+ session?.user?.email?.slice(1,7)} placeholder="Student ID" id="" /><br /><br />

//             <label htmlFor="name">Bio :</label>
//             <textarea value={bio} onChange={(e)=>setBio(e.target.value)} name="bio" id="" placeholder="Enter A Sweet Message!"/><br /><br />

//             <label htmlFor="name">Image :</label>
//             <input type="file"  accept="image/*" onChange={(e)=>setStudent_pic(e.target.files[0])} name="bio" id=""/><br /><br />
//             <button type="submit" onClick={()=>{setClick((prev)=>!prev)}}>Click</button>
//         </form>

//     </div>
//   );
// };

// export default page;



const Page = () => {

  const { data: session } = useSession()
  console.log("ud", session)
  const id = 'B' + session?.user?.email.slice(1, 7);

  const [fName, setfName] = useState("");
  const [lName, setLName] = useState("");
  const [about, setAbout] = useState(``);
  const [studentPic, setstudentPic] = useState(``);
  const [lIN, setlIN] = useState("");
  const [gb, setGb] = useState("");

  // const fData = new FormData();  

  function handleChange(event, setter) {
    setter(event.target.value);
    console.log(fName)
  }

  async function handleSubmit() {
    const formData = new FormData();

    formData.append("name",`${fName} ${lName}`);
    formData.append("email",`b422034@iiit-bh.ac.in`);
    formData.append("id",`B422034`);
    formData.append("about",`${about}`);
    formData.append("linkedin",`${lIN}`);
    formData.append("github",`${gb}`);
    formData.append("studentPic",studentPic);
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
    
    try {
      const res = await fetch('http://localhost:6969/register/profile/it/securev0',{
        method : "POST",
        body : formData,
      })
      alert("DONE!");
    }catch(e) {
      alert(e.message)
    }
  }

  return (
    <>
      <div className="flex justify-center h-screen items-center gap-4">
        <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-4">
          <h1 className="mt-1 p-2 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-bold font-serif text-transparent flex justify-center">Register</h1>
          <div className="flex justify-center gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-2 rounded-xl border-2 border-amber-400"
              value={fName}
              onChange={(e) => handleChange(e, setfName)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-2 rounded-xl border-2 border-amber-400"
              value={lName}
              onChange={(e) => handleChange(e, setLName)}
            />
          </div>
          <input
            type="text"
            placeholder="College ID"
            className="p-2 rounded-xl border-2 border-amber-400"
            value={id}
          />
          <input
            type="file"
            accept="image/*"
            placeholder="Upload Your Pic!"
            className="bg-amber-100 p-2 rounded-xl border-2 border-amber-400"
            onChange={(e)=>{setstudentPic(e.target.files[0])}}
          />
          <textarea
            name="about"
            rows="4"
            cols="50"
            placeholder="About"
            className="p-2 rounded-xl border-2 border-amber-400 resize-none"
            value={about}
            onChange={(e) => handleChange(e, setAbout)}
          ></textarea>
          <input
            type="text"
            placeholder="LinkedIn profile URL (if any)"
            className="p-2 rounded-xl border-2 border-amber-400"
            value={lIN}
            onChange={(e) => handleChange(e, setlIN)}
          />
          <input
            type="text"
            placeholder="Github profile URL"
            className="p-2 rounded-xl border-2 border-amber-400"
            value={gb}
            onChange={(e) => handleChange(e, setGb)}
          />
          <button onClick={handleSubmit} className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 p-2 rounded-xl text-white font-semibold text-lg hover:border-2 border-amber-400">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Page
