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
    <h1 style={{color:white}}>HELLO WORLD</h1>
    {/* <div className="card">
    <div className="poster">
        <img src="public\sarb.PNG" alt=""/>
    </div> 
    <div className="details">
        <h1 style="font-size: 30px;">Sarbojeet</h1>
        <h3 style="font-size: 30px;">B422051</h3>
        <div className="text" style="bottom:-140px">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptates a, aspernatur eos suscipit dolorem, veritatis mollitia officiis optio </div>
    </div>
</div> */}
      <ReactCardFlip isFlipped={flip}
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
      </ReactCardFlip>
    </>
  );
}
