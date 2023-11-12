"use client"
import React, { useState } from 'react';
import "./societycard.css";
import ReactCardFlip from 'react-card-flip';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
const SocietyCard = ({name,desc,sec,jsec,imgsrc,insta}) => {
    const [flip, setFlip] = useState(false);

    return (
      <div style={{margin:"40px"}} className="cards mt-5  flex-1/3 mx-[2rem] my-[5rem]">
                    <div className="content w-full p-5">
                      <img src={imgsrc} alt="" class="image"/>
                        <div className="soc-name">{name}</div>
                        <div className="soc-desc">{desc}</div>
                            <div className="member flex flex-row">
                                <div className="sec px-2 py-4 ">
                                    <h3 className="sec-head">Secretary</h3>
                                    <li className="sec-name">{sec}</li>
                                </div>
                                <div className="jsec px-3 py-4">
                                    <h3 className="sec-head">Joint Secretary</h3>
                                    
                                    {
                                      
                     jsec.length ==2 ?(
                         <>
                         <h1 style={{color:"rgb(191, 196, 196)"}}><li>{jsec[0]}</li></h1>
                         <h1 style={{color:"rgb(191, 196, 196)"}}><li>{jsec[1]}</li></h1>
                         </>
                     ):(
                         <h1 style={{color:"rgb(191, 196, 196)"}}><li>{jsec[0]}</li></h1>
                     )
                     
                 }
                                </div>
                            </div>
                    </div>
                </div>
                
      // <div>
      //   <ReactCardFlip isFlipped={flip}
      //   flipDirection="vertical">
      //   <div onClick={() => {
      //     setFlip(prev => (
      //       prev = !prev
      //     ))
      //   }} style={{ cursor:"pointer",width: "400px", height: "400px" ,margin:"70px",marginTop:"10px"}} className="master__Card relative w-72 h-72 m-2 flex rounded-xl overflow-hidden">
      //     <img
      //       className=" master__Card absolute m-0 rounded-xl w-full h-full object-cover border-4 border-[#f838a8]"
      //       src={imgsrc}
      //       alt=""
      //     />
      //     <div className="master__Card w-full flex flex-col justify-between ml-4 mt-2 font-semibold text-2xl z-10">

      //       <div className="font-bold text-white text-2xl mb-2 z-10">
      //         <h1 style={{color:'white'}}>{name}</h1>
      //       </div>
      //     </div>
      //   </div>

      //   <div onClick={() => {
      //     setFlip(prev => (
      //       prev = !prev
      //     ))
      //   }} style={{cursor:"pointer",width: "450px", height: "500px", margin: "30px",transition:"0.6s",textAlign: "center",borderColor:"purple",borderWidth:"5px",borderRadius:"4px"}} className="relative w-72 h-72 m-2">
      //     <div >
      //       <h1 style={{ color: "white", margin: "30px",fontSize:"30px"}}>{name}</h1>
      //         <br />
      //         <div style={{display:"flex",margin:"auto",justifyContent:"space-evenly"}}>
      //         </div>
      //         <a href={insta}>
      //         <InstagramIcon style={{color:"pink"}} />
      //         </a>
      //         <center>
      //         <h1 style={{ color: "white",fontSize:"bolder",marginTop: "60px", maxWidth: "80%", textAlign: "center" }}>{desc}</h1>
      //           <br /><br />
      //         <div className='container mx-auto flex flex-wrap justify-between' style={{maxWidth:"80%"}}>
      //           <div>
      //           <h1 style={{color:"white"}}>Secretary</h1>
      //           <h1 style={{color:"white"}}>{sec}</h1>
      //           </div>

      //           <div>
      //           <h1 style={{color:"white"}}>Joint Secretary</h1>
      //           {
      //               jsec.length ==2 ?(
      //                   <>
      //                   <h1 style={{color:"white"}}>{jsec[0]}</h1>
      //                   <h1 style={{color:"white"}}>{jsec[1]}</h1>
      //                   </>
      //               ):(
      //                   <h1 style={{color:"white"}}>{jsec[0]}</h1>
      //               )
      //           }

      //           </div>
      //         </div>
      //         </center>
      //     </div>
      //   </div>
      // </ReactCardFlip>
      // </div>
    );
};

export default SocietyCard;
