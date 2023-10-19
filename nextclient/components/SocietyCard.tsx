"use client"
import React, { useState } from 'react';
import "./soc.css";
import ReactCardFlip from 'react-card-flip';
import InstagramIcon from '@mui/icons-material/Instagram';
const SocietyCard = ({name,desc,sec,jsec,imgsrc,insta}) => {
    const [flip, setFlip] = useState(false);

    return (
        <div>
        <ReactCardFlip isFlipped={flip}
        flipDirection="vertical">
        <div onClick={() => {
          setFlip(prev => (
            prev = !prev
          ))
        }} style={{ cursor:"pointer",width: "400px", height: "400px" ,margin:"70px",marginTop:"10px"}} className="master__Card relative w-72 h-72 m-2 flex rounded-xl overflow-hidden">
          <img
            className=" master__Card absolute m-0 rounded-xl w-full h-full object-cover border-4 border-[#a838a8]"
            src={imgsrc}
          />
          <div className="master__Card w-full flex flex-col justify-between ml-4 mt-2 font-semibold text-2xl z-10">

            <div className="font-bold text-white text-2xl mb-2 z-10">
              <h1 style={{color:'black'}}>{name}</h1>
            </div>
          </div>
        </div>

        <div onClick={() => {
          setFlip(prev => (
            prev = !prev
          ))
        }} style={{cursor:"pointer",width: "500px", height: "500px", margin: "auto", textAlign: "center",borderColor:"white",borderWidth:"5px",borderRadius:"4px"}} className="relative w-72 h-72 m-2">
          <div >
            <h1 style={{ color: "white", margin: "30px",fontSize:"30px"}}>Tech Soc</h1>
              <br />
              <div style={{display:"flex",margin:"auto",justifyContent:"space-evenly"}}>
              </div>
              <center>
              <h1 style={{ color: "white",fontSize:"bolder",marginTop: "60px", maxWidth: "80%", textAlign: "center" }}>{desc}</h1>
                <br /><br />
              <div className='container mx-auto flex flex-wrap justify-between' style={{maxWidth:"60%"}}>
                <div>
                <h1 style={{color:"white"}}>Secretary</h1>
                <h1 style={{color:"white"}}>{sec}</h1>
                </div>

                <div>
                <h1 style={{color:"white"}}>Joint Secretary</h1>
                {
                    jsec.length ==2 ?(
                        <>
                        <h1 style={{color:"white"}}>jsec[0]</h1>
                        <h1 style={{color:"white"}}>jsec[1]</h1>
                        </>
                    ):(
                        <h1 style={{color:"white"}}>jsec[0]</h1>
                    )
                }

                </div>
              </div>
              </center>
          </div>
        </div>
      </ReactCardFlip>
      </div>
    );
};

export default SocietyCard;
