"use client";

import ProfileCard from "@/components/ProfileCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Page = () => {

  const { data: session } = useSession()
  console.log("ud", session)
  const ID = 'B' + session?.user?.email.slice(1, 7);

  const [fName, setfName] = useState("");
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

    formData.append("name", `${fName}`);
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
      const res = await fetch('http://localhost:6969/register/profile/it/securev0', {
        method: "POST",
        body: formData,
      })
      alert("DONE!");
    } catch (e) {
      alert(e.message)
    }
  }

  async function handleUpdate() {
    const formData = new FormData();

    formData.append("name", `${fName}`);
    formData.append("email", `${id}@iiit-bh.ac.in`);
    formData.append("id", `${ID}`);
    formData.append("about", `${about}`);
    formData.append("linkedin", `${lIN}`);
    formData.append("github", `${gb}`);
    formData.append("insta", `${insta}`);
    formData.append("studentPic", studentPic);
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const res = await fetch('http://localhost:6969/update', {
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
          const res = await fetch('http://localhost:6969/checkIfRegistered', {
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
            console.log("Registered hai",data.user[0]);
            setRegistered(data.user[0]);
            setfName(data.user[0].name);
            setAbout(data.user[0].about);
            setlIN(data.user[0].linkedin);
            setGb(data.user[0].github);
            setInsta(data.user[0].insta);
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
    <h1 className="mt-1 p-2 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-bold font-serif text-transparent flex justify-center">You are Registered!</h1>
    <ProfileCard  props={registered} />
    <div className="flex justify-center h-screen items-center gap-4">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <h1 className="mt-1 p-2 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-bold font-serif text-transparent flex justify-center">Wanna Update?</h1>
            <div className="flex justify-center gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-2 rounded-xl border-2 border-amber-400"
                value={fName}
                onChange={(e) => handleChange(e, setfName)}
              />
            </div>
            <input
              type="text"
              placeholder="College ID"
              className="p-2 rounded-xl border-2 border-amber-400"
              value={ID}
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
            <button onClick={handleUpdate} className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 p-2 rounded-xl text-white font-semibold text-lg hover:border-2 border-amber-400">
              Update!
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
