"use client";

import ProfileCard from "@/components/ProfileCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Page = () => {

  const { data: session } = useSession()
  console.log("ud", session)
  const ID = 'B' + session?.user?.email.slice(1, 7);

  const [fName, setfName] = useState("");
  const [lName, setLName] = useState("");
  const [about, setAbout] = useState(``);
  const [insta, setInsta] = useState(``);
  const [id, setId] = useState(``);
  const [studentPic, setstudentPic] = useState(``);
  const [lIN, setlIN] = useState("");
  const [gb, setGb] = useState("");
  const [registered, setRegistered] = useState("");

  function handleChange(event, setter) {
    setter(event.target.value);
    console.log(fName)
  }

  async function handleSubmit() {
    const formData = new FormData();

    formData.append("name", `${fName} ${lName}`);
    formData.append("email", `${id}@iiit-bh.ac.in`);
    formData.append("id", `${id}`);
    formData.append("about", `${about}`);
    formData.append("linkedin", `${lIN}`);
    formData.append("github", `${gb}`);
    formData.append("insta", `${insta}`);
    formData.append("studentPic", studentPic);
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const res = await fetch('http://65.0.107.166:6969/register/profile/it/securev0', {
        method: "POST",
        body: formData,
      })
      alert("DONE!");
    } catch (e) {
      alert(e.message)
    }
  }

  useEffect(() => {
    async function checkIfRegistered() {
      try {
        if (ID !== undefined) {
          const res = await fetch('http://65.0.107.166:6969/checkIfRegistered', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "ID": `${ID}`,
            })
          })
          const data = await res.json()
          if (data.registered === undefined || data.registered === false) {
            console.log("Registered nahi hai");
          }
          else {
            console.log("Registered hai");
            setRegistered(data.user[0]);
          }
        }
      } catch (e) {
        console.log(e.message);
      }
    }
    checkIfRegistered()
  }, [ID])


  return (
    registered ? (
    <center>
    <ProfileCard id='1' props={registered} />
    <h1 className="mt-1 p-2 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-bold font-serif text-transparent flex justify-center">Want to Update?</h1>
    <div className="flex justify-center h-screen items-center gap-4">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
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
              onChange={(e) => handleChange(e, setId)}
            />
            <input
              type="file"
              accept="image/*"
              placeholder="Upload Your Pic!"
              className="bg-amber-100 p-2 rounded-xl border-2 border-amber-400"
              onChange={(e) => { setstudentPic(e.target.files[0]) }}
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
            <input
              type="text"
              placeholder="Instagram profile URL"
              className="p-2 rounded-xl border-2 border-amber-400"
              value={insta}
              onChange={(e) => handleChange(e, setInsta)}
            />
            <button onClick={handleSubmit} className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 p-2 rounded-xl text-white font-semibold text-lg hover:border-2 border-amber-400">
              Submit
            </button>
          </form>
        </div>
    
    </center>
    
    
    
    ) : (
      <>
        <div className="flex justify-center h-screen items-center gap-4">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
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
              onChange={(e) => handleChange(e, setId)}
            />
            <input
              type="file"
              accept="image/*"
              placeholder="Upload Your Pic!"
              className="bg-amber-100 p-2 rounded-xl border-2 border-amber-400"
              onChange={(e) => { setstudentPic(e.target.files[0]) }}
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
            <input
              type="text"
              placeholder="Instagram profile URL"
              className="p-2 rounded-xl border-2 border-amber-400"
              value={insta}
              onChange={(e) => handleChange(e, setInsta)}
            />
            <button onClick={handleSubmit} className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 p-2 rounded-xl text-white font-semibold text-lg hover:border-2 border-amber-400">
              Submit
            </button>
          </form>
        </div>
      </>
    )

  );
}

export default Page
