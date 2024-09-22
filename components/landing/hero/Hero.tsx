import Image from "next/image";
import LinkStack from "./LinkStack";
import NamePlate from "./NamePlate";
import Quote from "./Quote";


export default function Hero() {
  return (
    <div className="bg-[url('/images/landing/HERO.png')] bg-cover bg-center w-full h-screen relative" >
        <div className="w-full h-full bg-brand opacity-60" >


        </div>
        <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center" >

          <Image src={'/images/landing/maharashtra.png'} alt="state-img" width={850} height={700} className="object-cover" />

        </div>
        <div className="absolute left-0 bottom-0 w-[80%] h-full flex justify-center items-end " >

          <Image src={'/images/landing/bhausaheb-hero.png'} alt="bhausaheb-img" width={500} height={630} className="object-cover" />

        </div>

        <div className="absolute left-0 bottom-0 w-[95%] h-full flex justify-end items-center " >
          <LinkStack/>
        </div>

        <div className="absolute left-5 top-5 " >
            <NamePlate/>
        </div>

        <div className="absolute left-0 bottom-20 w-[90%] h-full flex justify-end items-end " >

          <Quote/>

        </div>



    </div>
  )
}
