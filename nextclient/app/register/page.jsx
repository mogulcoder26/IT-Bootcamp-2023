"use client";

import ProfileCard from "@/components/ProfileCard";
import { TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { useEffect, useRef, useState } from "react";
import "./register.css";

const Page = () => {
  const { data: session } = useSession();

  const ID = "B" + session?.user?.email.slice(1, 7);
  const successRef = useRef(null);
  const errorRef = useRef(null);
  const characterLimit = 270;
  const [fName, setfName] = useState("");
  const [about, setAbout] = useState(``);
  const [insta, setInsta] = useState(``);
  const [studentPic, setstudentPic] = useState(``);
  const [lIN, setlIN] = useState("");
  const [gb, setGb] = useState("");
  const [registered, setRegistered] = useState("");

  function handleChange(event, setter) {
    if (setter === setAbout) {
      let value = event.target.value;
      if (value.length <= characterLimit) {
        setAbout(value);
      } else {
        return;
      }
    }
    setter(event.target.value);
  }

  async function handleSubmit() {
    const formData = new FormData();

    formData.append("name", `${fName}`);
    formData.append("email", `${ID}@iiit-bh.ac.in`);
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
      let res = await fetch(
        "https://bootcamp-server.onrender.com/register/profile/it/securev0",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res) {
        enqueueSnackbar("Successfully Registered Profile...!");
        if (ID[3] === 2) {
          router.push("/2022");
        } else if (ID[3] === 3) {
          router.push("/2023");
        }
      }
    } catch (e) {
      console.log(e.message);
      errorRef.current.click();
    }
  }

  async function handleUpdate() {
    const formData = new FormData();

    formData.append("name", `${fName}`);
    formData.append("email", `${ID}@iiit-bh.ac.in`);
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
      const res = await fetch("https://bootcamp-server.onrender.com/update", {
        method: "POST",
        body: formData,
      });
      if (res) {
        enqueueSnackbar("Successfully Updated Profile...!");
      }
    } catch (e) {
      console.log("err: ", e.message);
      errorRef.current.click();
    }
  }

  useEffect(() => {
    async function checkIfRegistered() {
      try {
        if (ID !== undefined) {
          const res = await fetch(
            "https://bootcamp-server.onrender.com/checkIfRegistered",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ID: `${ID}`,
              }),
            }
          );
          const data = await res.json();
          if (data.registered === undefined || data.registered === false) {
            console.log("Not Registered");
          } else {
            console.log("Registered hai", data.user[0]);
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
    checkIfRegistered();
  }, [ID]);

  return registered ? (
    <>
      <h1 className="mt-1 p-2 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent flex justify-center">
        You are Registered!
      </h1>
      <center>
        <ProfileCard props={registered} style={{ margin: "40px" }} />
        <br />
        <br />
      </center>
      <div className="max_C flex justify-center h-screen items-center gap-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
          style={{ width: "100%", padding: "0 20px" }}
        >
          <h1 className="mt-1 p-2 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent flex justify-center">
            Update Profile
          </h1>
          <TextField
            value={fName}
            onChange={(e) => handleChange(e, setfName)}
            fullWidth
            label="Enter Your Name"
            id="fullWidth"
            color="warning"
            focused
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            value={ID}
            fullWidth
            label="Your ID"
            id="fullWidth"
            InputProps={{
              style: { color: "white" },
            }}
            color="warning"
            focused
          />
          <label style={{ color: "#f57c00", margin: "0" }}>
            Upload Your Pic!
          </label>
          <input
            type="file"
            accept="image/*"
            placeholder="Upload Your Pic!"
            className="p-2 rounded border-2 border-purple text-white border-[#f57c00]"
            onChange={(e) => {
              setstudentPic(e.target.files[0]);
            }}
          />
          <TextField
            id="outlined-multiline-static"
            label="About"
            multiline
            color="warning"
            focused
            InputProps={{
              style: { color: "white" },
            }}
            value={about}
            onChange={(e) => handleChange(e, setAbout)}
            rows={4}
          />
          <p style={{ color: "white", textAlign: "center" }}>
            {characterLimit - about.length} characters remaining
          </p>
          <TextField
            value={lIN}
            onChange={(e) => handleChange(e, setlIN)}
            fullWidth
            label="Enter LinkedIn Username"
            id="fullWidth"
            color="warning"
            focused
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            fullWidth
            label="Enter Github Username"
            id="fullWidth"
            color="warning"
            focused
            InputProps={{
              style: { color: "white" },
            }}
            value={gb}
            onChange={(e) => handleChange(e, setGb)}
          />
          <TextField
            fullWidth
            label="Enter Github Username"
            id="fullWidth"
            color="warning"
            focused
            InputProps={{
              style: { color: "white" },
            }}
            value={insta}
            onChange={(e) => handleChange(e, setInsta)}
          />
          <SnackbarProvider />
          <button
            onClick={() => {
              enqueueSnackbar("Updating Profile to Server...");
              handleUpdate();
            }}
            className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 p-2 rounded-xl text-white font-semibold text-lg hover:border-2 border-amber-400"
          >
            Submit
          </button>
        </form>
        <button
          style={{ display: "none" }}
          ref={successRef}
          onClick={() => enqueueSnackbar("Successfully Updated Profile...!")}
        ></button>
        <button
          style={{ display: "none" }}
          ref={errorRef}
          onClick={() => enqueueSnackbar("Something Went wrong")}
        ></button>
      </div>
      <br />
      <br />
    </>
  ) : (
    <>
      <br />
      <div className="max_C flex justify-center h-screen items-center gap-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
          style={{ width: "100%", padding: "0 20px" }}
        >
          <h1 className="mt-1 p-2 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent flex justify-center">
            Register
          </h1>
          <TextField
            value={fName}
            onChange={(e) => handleChange(e, setfName)}
            fullWidth
            label="Enter Your Name"
            id="fullWidth"
            color="warning"
            focused
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            value={ID}
            fullWidth
            label="Your ID"
            id="fullWidth"
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            color="warning"
            focused
          />
          <label style={{ color: "#f57c00", margin: "0" }}>
            Upload Your Pic!
          </label>
          <input
            type="file"
            accept="image/*"
            placeholder="Upload Your Pic!"
            className="p-2 rounded border-2 border-purple"
            onChange={(e) => {
              setstudentPic(e.target.files[0]);
            }}
            style={{ color: "white", border: "2px solid #f57c00" }}
          />
          <TextField
            id="outlined-multiline-static"
            label="About"
            multiline
            color="warning"
            focused
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            value={about}
            onChange={(e) => handleChange(e, setAbout)}
            rows={4}
          />
          <p style={{ color: "white", textAlign: "center" }}>
            {characterLimit - about.length} characters remaining
          </p>
          <TextField
            value={lIN}
            onChange={(e) => handleChange(e, setlIN)}
            fullWidth
            label="Enter LinkedIn Username"
            id="fullWidth"
            color="warning"
            focused
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            fullWidth
            label="Enter Github Username"
            id="fullWidth"
            color="warning"
            focused
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            value={gb}
            onChange={(e) => handleChange(e, setGb)}
          />
          <TextField
            fullWidth
            label="Enter Github Username"
            id="fullWidth"
            color="warning"
            focused
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            value={insta}
            onChange={(e) => handleChange(e, setInsta)}
          />
          <SnackbarProvider />
          <button
            onClick={() => {
              enqueueSnackbar("Uploading Profile to Server...");
              handleSubmit();
            }}
            className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 p-2 rounded-xl text-white font-semibold text-lg hover:border-2 border-amber-400"
          >
            Submit
          </button>
        </form>
        <button
          style={{ display: "none" }}
          ref={successRef}
          onClick={() => enqueueSnackbar("Successfully Updated Profile...!")}
        ></button>
        <button
          style={{ display: "none" }}
          ref={errorRef}
          onClick={() => enqueueSnackbar("Something Went wrong")}
        ></button>
      </div>
      <br />
      <br />
    </>
  );
};

export default Page;
