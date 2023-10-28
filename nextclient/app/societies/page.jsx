import SocietyCard from "@/components/SocietyCard";
import Card from "../../components/Cardx";
import Navbar from "../../components/Navbar";
import "./societies.css";
import societies from "./societies"

export default function Societies() {
  return (
    <>
      <center>
        <br />
        <h1 className="text-white text-3xl font-bold">Societies</h1>
        <br />
      </center>
      <div className="flex justify-evenly flex-wrap gap-2 m-4">
            {
                societies.map((soc,ind)=>(
                    <SocietyCard key={ind} {...soc} />
                ))
            }
      </div>
    </>
  );
}





