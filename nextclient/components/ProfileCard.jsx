import "./pc.css"
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function ProfileCard({ props }) {
  console.log("p", props)
  const imgUrl = `https://di31z5z4zln8a.cloudfront.net/${props.imageKey}`;
  const Id = props?.id;
  const [flip, setFlip] = useState(false);
  return (
    <>

      <ReactCardFlip isFlipped={flip}
        flipDirection="horizontal">
        <div onClick={() => {
          setFlip(prev => (
            prev = !prev
          ))
        }} style={{ cursor:"pointer",width: "350px", height: "450px",margin:"20px"}} className="master__Card relative w-72 h-72 m-2 flex rounded-xl overflow-hidden">
          <img
            className=" master__Card absolute m-0 rounded-xl w-full h-full object-cover border-4 border-[#a838a8]"
            src={imgUrl}
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
        }} style={{cursor:"pointer",width: "500px", height: "500px", margin: "auto", textAlign: "center",borderColor:"white",borderWidth:"5px",borderRadius:"4px"}} className="relative w-72 h-72 m-2">
          <div className="">
            <h1 style={{ color: "white", margin: "30px",fontSize:"30px"}}>{props.name}</h1>
              <br />
              <div style={{display:"flex",margin:"auto",justifyContent:"space-evenly"}}>
              <a href="/">
              <InstagramIcon style={{ fontSize: 50, color:"pink" }} />
              </a>
              <a href="/">
              <LinkedInIcon color="primary" style={{ fontSize: 55}}
              />
              </a>
              <a href="/">
              <GitHubIcon style={{fontSize:"50px",color:"white"}}/>
              </a>
              </div>
              <center>
              <h1 style={{ color: "white",fontSize:"bolder",marginTop: "90px", maxWidth: "80%", textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsum nihil perferendis sequi, esse rem reprehenderit odio eaque corporis earum saepe eligendi optio nesciunt dolorum est numquam magnam, nemo nulla consequatur mollitia sapiente dolorem!</h1>
              </center>
          </div>
        </div>
      </ReactCardFlip>
    </>
  );
}
