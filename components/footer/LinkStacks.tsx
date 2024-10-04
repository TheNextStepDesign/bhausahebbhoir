import Link from "next/link"
import { Stack, VStacks } from "../layouts/Stacks"
import { H2 } from "../typography/FontStyles"
import Image from "next/image"

import {  campaigns, Connect, LinkData, LinkDataIcon, links } from "./data"
import { ContactForm } from "./ContactForm"

export default function LinkStacks() {
  return (
    <Stack className="justify-between items-center gap-5 md:gap-2.5 w-full md:w-[65%] pt-5 md:pt-0 md:pl-5 " >
        <LinkVstackWithIcon title="Connect with us" data={Connect} />
        {/* <LinkVstack title="Links" data={links} />
        <LinkVstack title="campaigns" data={campaigns} /> */}
        <div className="md:w-1/2 w-full" >
        <ContactForm/>
        </div>
    </Stack>
  )
}


interface LinkVstackProps{
    title:string,
    data:LinkData[]
}

 function LinkVstack({title,data}:LinkVstackProps){
    return (
        <div>
            <H2 className="mb-2.5" >{title}</H2>
            
            <VStacks className="gap-2.5 " >
                {
                    data.map((item,index)=>{
                        return (
                            <Link href={item.href} key={index} target="_blank" className="text-white hover:text-gray-300 text-base" >{item.title}</Link>
                        )
                    })
                }
            </VStacks>      
        </div>
    )
}



interface LinkVstackWithIconProps{
    title:string,
    data:LinkDataIcon[]
}


function LinkVstackWithIcon({title,data}:LinkVstackWithIconProps){
    return (
        <div className="" >
            <H2 className="mb-2.5">{title}</H2>
            
            <VStacks className="gap-2.5 md:max-w-[310px]">
                {
                    data.map((item,index)=>{
                        return (
                            <Link href={item.href} key={index} target="_blank" className="text-white hover:text-gray-300 text-[12px]" >
                                <div className="flex gap-2 items-center">
                                    <Image src={item.icon} alt={item.title} width={16} height={16} className="w-4 h-4" />
                                    <span>{item.title}</span>
                                </div>
                            </Link>
                        )
                    })
                }
            </VStacks>
        </div>
    )
}