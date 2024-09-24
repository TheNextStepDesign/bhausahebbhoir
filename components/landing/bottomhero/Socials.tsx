import whatsapp from "./icons/whatsapp.svg";
import insta from "./icons/insta.svg";
import facebook from "./icons/fb.svg";
import mail from "./icons/mail.svg";
import location from "./icons/location.svg";
import call from "./icons/call.svg";
import x from "./icons/x.svg";
import youtube from "./icons/youtube.svg";
import { HStacks, VStacks } from "@/components/layouts/Stacks";
import { Base } from "@/components/typography/FontStyles";
import Image from "next/image";

const social1 = [
  {
    name: "whatsapp",
    icon: whatsapp,
    link: "https://wa.me/919922501504",
  },
  {
    name: "mail",
    icon: mail,
    link: "mailto:office.bhausahebhbhoir@gmail.com",
  },
  {
    name: "location",
    icon: location,
    link: "https://maps.app.goo.gl/NNYGCuZmScJz7NBw6",
  },
  {
    name: "call",
    icon: call,
    link: "tel:+919922501706",
  },
];

const social2 = [
  {
    name: "facebook",
    icon: facebook,
    link: "https://www.facebook.com/bhausahebbhoirofficial",
  },
  {
    name: "insta",
    icon: insta,
    link: "https://www.instagram.com/bhausahebbhoirofficial?igsh=azh4OW91NXdmdmc=",
  },
  {
    name: "youtube",
    icon: youtube,
    link: "https://youtube.com/@bhausahebbhoironline?si=jNcgmnV0QLR6b6en",
  },
  {
    name: "x",
    icon: x,
    link: "https://x.com/BhausahebBhoir?t=3A4eUKwlLqBULO4WgfELpw&s=09",
  }
];

export default function Socials() {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:w-[680px] md:mr-10 text-black py-5 md:py-0">
      <Social1 />
      <div className="w-full h-[1px] md:h-20  md:w-[2px]  bg-black"></div>
      <Social2 />
    </div>
  );
}

function Social1() {
  return (
    <VStacks className="gap-3 ">
      <Base className="font-bold">संपर्क करा</Base>
      <HStacks className="gap-3 items-center ">
        {social1.map((item, index) => (
          <a href={item.link} target="_blank" key={index}>
            <Image src={item.icon} alt={item.name} width={24} height={24} className="hover:scale-110 transition-all duration-300" />
          </a>
        ))}
      </HStacks>
    </VStacks>
  );
}

function Social2() {
  return (
    <VStacks className="gap-3">
      <Base className="font-bold">सोशल मीडिया वर फॉलो करा</Base>
      <HStacks className="gap-3">
        {social2.map((item, index) => (
          <a href={item.link} target="_blank" key={index}>
            <Image src={item.icon} alt={item.name} width={24} height={24} className="hover:scale-110 transition-all duration-300 "/>
          </a>
        ))}
      </HStacks>
    </VStacks>
  );
}
