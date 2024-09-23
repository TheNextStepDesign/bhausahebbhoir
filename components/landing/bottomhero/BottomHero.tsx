import { Center, HStacks, VStacks } from "@/components/layouts/Stacks";
import Quote from "./Quote";
import Image from "next/image";
import { Base } from "@/components/typography/FontStyles";
import Socials from "./Socials";
import Body from "@/components/layouts/Body";


export default function BottomHero() {
  return (
   <div className="relative bg-brand text-white" >
        
            <div className="min-h-[400px] w-full  flex flex-col md:flex-row justify-start md:justify-end items-start md:items-center gap-5 px-5 py-5" >
                <div className="md:hidden " >
                <Image src={'/images/landing/bhausaheb-bottom-hero.png'} alt="bhausaheb-img" width={235} height={350} className="object-cover" />
                </div>
                <Quote/>
            </div>
            <div className="min-h-[100px] bg-gray w-full  flex justify-start md:justify-end items-center pl-5" >
                <Socials/>
            </div>
    
            <div  className="hidden md:block md:absolute md:bottom-0 md:left-10" >
    
                <Image src={'/images/landing/bhausaheb-bottom-hero.png'} alt="bhausaheb-img" width={435} height={550} className="object-cover" />
    
            </div>
        

   </div>
  )
}
