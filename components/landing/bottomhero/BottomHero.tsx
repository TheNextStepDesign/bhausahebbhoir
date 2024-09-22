import { Center, HStacks, VStacks } from "@/components/layouts/Stacks";
import Quote from "./Quote";
import Image from "next/image";
import { Base } from "@/components/typography/FontStyles";
import Socials from "./Socials";


export default function BottomHero() {
  return (
   <div className="relative " >
        <div className="min-h-[400px] w-full bg-brand text-white flex justify-end items-center" >
            <Quote/>
        </div>
        <Center className="min-h-[100px] bg-gray py-5" >
            <Socials/>
        </Center>

        <div  className="block md:absolute md:bottom-0 md:left-10" >

            <Image src={'/images/landing/bhausaheb-bottom-hero.png'} alt="bhausaheb-img" width={435} height={550} className="object-cover" />

        </div>
   </div>
  )
}
