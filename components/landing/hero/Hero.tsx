import Image from "next/image";
import LinkStack from "./LinkStack";
import NamePlate from "./NamePlate";
import Quote from "./Quote";


export default function Hero() {
  return (
    <div className="bg-[url('/images/landing/HERO.webp')] bg-cover bg-center w-full h-screen relative overflow-hidden" >
        <div className="w-full h-full bg-black opacity-20" >


        </div>
        <div className="absolute left-0 top-10 w-full md:w-[80%] h-full flex justify-center items-center " >

          <Image src={'/images/landing/maharashtra.png'} alt="state-img" width={650} height={600} className="object-cover" />

        </div>
        <div className="absolute left-0 bottom-0 w-[75%] h-full flex justify-center items-end " >

          <Image src={'/images/landing/bhausaheb-hero.png'} alt="bhausaheb-img" width={350} height={630} className="  object-cover" />

        </div>

        <div className="absolute left-0 bottom-10 md:bottom-0 w-[95%] h-full flex justify-end items-end md:justify-end md:items-center z-10" >
          <LinkStack/>
        </div>

        <div className="absolute left-0 md:left-5 top-0 md:top-5 w-full h-full flex justify-center md:justify-start items-start" >
            <NamePlate/>
        </div>

        <div className="absolute left-0 top-0 md:left-0  md:bottom-10 w-full md:w-[90%] h-[60%] md:h-full flex justify-center items-center md:justify-end md:items-end " >

          <Quote/>

        </div>



    </div>
  )
}
