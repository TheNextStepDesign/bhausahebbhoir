import Image from "next/image";
import LinkStack from "./LinkStack";
import NamePlate from "./NamePlate";
import Quote from "./Quote";
import { Center, HStacks, Stack, VStacks } from "@/components/layouts/Stacks";
import { H1 } from "@/components/typography/FontStyles";
import { Button } from "@/components/ui/Button";
import { RevolutionForm } from "./RevolutionForm";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-[url('/images/landing/hero.jpg')] bg-cover bg-center w-full md:min-h-screen overflow-hidden " >

      {/* overlay bg on top of the image */}
      {/* <div className="absolute top-0 left-0 w-full  md:min-h-screen  " >

      </div> */}
      

        <Stack className="md:justify-between w-full " >

          {/* left side section */}
          <div className="w-full md:w-1/2 z-10  relative min-h-[500px] md:min-h-[100vh] " >

            <div className="absolute left-0 bottom-0  w-full " >
              <Image  src={"/images/landing/bhausaheb-hero.png"} alt="name-plate" className="object-cover  w-full md:w-[570px]"  width={570} height={490} />
            </div>

            <div className="absolute left-0 top-0" >
              <Image  src={"/images/icons/name-plate.svg"} className="object-cover w-[300px] md:w-[500px]" alt="name-plate " width={495} height={140} />
            </div>

          </div>

          {/* right side section */}
          <Center className="w-full md:w-[40%] z-10 py-10  " >

            <VStacks className="max-w-[400px] mx-auto gap-10 ">

              <div className="  rounded-lg max-w-[390px] "  >
                  <Image src={'/images/landing/hero-qoute.svg'} alt="name-plate" width={390} height={380} className="object-cover mx-auto w-[200px] md:w-[390px]" />
              </div>

              <HStacks className="justify-center gap-5" >

                <RevolutionForm/>

                <Link href="#footer" >
                  <Button className="bg-white text-black  " >
                    Contact us
                  </Button>
                </Link>

              </HStacks>

            </VStacks>

          </Center>
          
  
        </Stack>


        {/* <div className="fixed left-2 top-2 z-20" >
              <Image  src={"/images/icons/name-plate.svg"} className="object-cover w-[300px] md:w-[500px]" alt="name-plate " width={495} height={140} />
        </div> */}

        {/* old hero design*/}

        {/* <div className="absolute left-0 top-10 w-full md:w-[80%] h-full flex justify-center items-center " >
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
        </div> */}


        {/* new hero design */}





    </div>
  )
}
