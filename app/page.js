import Image from "next/image";
import Navbar from "./components/Navbar";
import Martine from "../images/Martine_Cusip.jpg"
import Nick from "../images/Nick_Cusip.jpg"



export default function Home() {
  return (
    <main>
      <Navbar/> 
      <section className=" bg-slate-400 w-full h-[80vh] ">
        

      </section>
      <section>
        <h1 className="text-center font-bold text-green-500 text-[25px] ">About project</h1>
        <div className="flex">
          <div>Image</div>
          <div>
           
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-center font-bold text-blue-500 text-[25px] ">Team Members</h1>
        <div>
          <div>
            <Image src={Martine} alt="martine" className="w-[100px] h-[100px]"/>
            <div>

              
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </section>
    </main>
  );
}
