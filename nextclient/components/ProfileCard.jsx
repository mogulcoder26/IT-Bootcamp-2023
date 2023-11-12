import "./profilecard.css"
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { color } from "framer-motion";
export default function ProfileCard({ props }) {
  console.log("p", props)
  const imgUrl = `https://di31z5z4zln8a.cloudfront.net/${props.imageKey}`;
  const instaUrl = `https://www.instagram.com/${props.insta}`;
  const linkedinUrl = `https://www.linkedin.com/in/${props.linkedin}`;
  const githubUrl = `https://github.com/${props.github}`;
  const Id = props?.id;
  const [flip, setFlip] = useState(false);
  return (
    <>
    {/* <h1 style={{color:white}}>HELLO WORLD</h1> */}
    <div className="bgcard">
    <div className="card">
    <div className="poster">
    <img
            loading="lazy"
            className=" master__Card absolute m-0 rounded-xl w-full h-full object-cover  border-[#a838a8]"
            src={imgUrl}
            alt="user-image"
          />
    </div> 
    <div className="details">
    <div className="name">{props.name}</div>
        <div className="id">{typeof (Id) === 'string' ? Id[0]+Id[1]+Id[2]+Id[3]+Id[4]+Id[5] + Id[6] : null}</div>
        <div className="desc" style={{bottom:"-100px",paddingTop:"1rem",fontSize:"1rem"}}>{props.about} </div>
    </div>
    <div className="socials">
            <ul>
        <a href=""><i className="fa-brands fa-instagram fa-2xl" style={{color: "#dfe0e1"}}></i></a>
        <a href=""><i className="fa-brands fa-linkedin fa-2xl" style={{color: "#dfe0e1"}}></i></a>
        <a href=""><i className="fa-brands fa-github fa-2xl" style={{color: "#dfe0e1"}}></i></a>
    </ul>
    </div>
</div>
</div>

{/* <div className="bgcard"> 
<div className="card">
    <div className="poster">
        <img src="amit.PNG" alt=""/>
    </div> 
    <div className="details">
        <div className="name">{props.name}</div>
        <div className="id">{props.Id}</div>
        <div className="desc" style={{bottom:"-140px",paddingTop:"1rem",fontSize:"1rem"}}>{props.about} </div>
        <div className="socials">
            <ul>
        <a href=""><i className="fa-brands fa-instagram fa-2xl" style={{color: "#dfe0e1"}}></i></a>
        <a href=""><i className="fa-brands fa-linkedin fa-2xl" style={{color: "#dfe0e1"}}></i></a>
        <a href=""><i className="fa-brands fa-github fa-2xl" style={{color: "#dfe0e1"}}></i></a>
    </ul>
    </div>
    </div>
</div>
</div>  */}





      {/* <ReactCardFlip isFlipped={flip}
        flipDirection="horizontal">
        <div onClick={() => {
          setFlip(prev => (
            prev = !prev
          ))
        }} style={{ cursor:"pointer",width: "350px", height: "450px",margin:"20px"}} className="master__Card relative w-72 h-72 m-2 flex rounded-xl overflow-hidden">
          <img
            loading="lazy"
            className=" master__Card absolute m-0 rounded-xl w-full h-full object-cover border-4 border-[#a838a8]"
            src={imgUrl}
            alt="user-image"
          />
          <div className="master__Card w-full flex flex-col justify-between ml-4 mt-2 font-semibold text-2xl z-10">
            <div>
              <div className="font-bold text-white text-2xl z-10"><h1>ID</h1></div>
              <div className="font-bold text-white text-2xl z-10">
                <h1>{typeof (Id) === 'string' ? Id[5] + Id[6] : null}</h1></div>
            </div>
            <div className="font-bold text-white text-2xl mb-2 z-10">
              <h1>{props.name}</h1>
            </div>
          </div>
        </div>

        <div onClick={() => {
          setFlip(prev => (
            prev = !prev
          ))
        }} style={{cursor:"pointer",width: "350px", height: "450px",margin:"20px",marginBottom:"0px", textAlign: "center",borderColor:"white",borderWidth:"5px",borderRadius:"4px"}} className="relative w-72 h-72 m-2">
          <div className="">
            <h1 style={{ color: "white", margin: "20px",marginBottom:"0px",fontSize:"30px"}}>{props.name}</h1>
              <br />
              <div style={{display:"flex",justifyContent:"space-evenly",marginBottom:"20px"}}>
              {
                props.insta?(
                  <a href={instaUrl}>
                    <InstagramIcon style={{ fontSize: 50, color:"pink" }} />
                  </a>
                ):(null)
              }
              {
                props.github?(
                  <a href={githubUrl}>
                    <GitHubIcon style={{ fontSize: 50, color:"white" }} />
                  </a>
                ):(null)
              }
              {
                props.linkedin?(
                  <a href={linkedinUrl}>
                    <LinkedInIcon color="primary" style={{ fontSize: 50}} />
                  </a>
                ):(null)
              }
              </div>
              <center>
              <h1 style={{ color: "white",fontSize:"bolder",marginTop: "10px", maxWidth: "80%", textAlign: "center" }}>{props.about}</h1>            </center>
          </div>
        </div>
      </ReactCardFlip> */}
    </>
  );
}
