import SocietyCard from "@/components/SocietyCard";
import Card from "../../components/Cardx";
import Navbar from "../../components/Navbar";
import "./style.css";
import societies from "./societies"

export default function Societies() {
  return (
    <>
      <center>
        <br />
        <h1 className="text-white text-3xl font-bold">Societies</h1>
        <br />
      </center>
      <div className="container mx-auto flex flex-wrap justify-center">
            {
                societies.map((soc,ind)=>(
                    <SocietyCard {...soc} />
                ))
            }
      </div>
    </>
  );
}





