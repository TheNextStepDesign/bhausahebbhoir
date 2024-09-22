import whatsapp from "./icons/whatsapp.svg";
import insta from "./icons/insta.svg";
import facebook from "./icons/fb.svg";
import mail from "./icons/mail.svg";
import youtube from "./icons/youtube.svg";
import { HStacks, VStacks } from "@/components/layouts/Stacks";
import { Base } from "@/components/typography/FontStyles";
import Image from "next/image";

const social1 = [
  {
    name: "whatsapp",
    icon: whatsapp,
    link: "https://wa.me/919922199221",
  },
  {
    name: "mail",
    icon: mail,
    link: "mailto:kalyanpaintsanddecorators@gmail.com",
  },
];

const social2 = [
  {
    name: "facebook",
    icon: facebook,
    link: "/",
  },
  {
    name: "insta",
    icon: insta,
    link: "/",
  },
  {
    name: "youtube",
    icon: youtube,
    link: "/",
  },
];

export default function Socials() {
  return (
    <div className="flex flex-row gap-5">
      <Social1 />
      <div className="w-[1px]  bg-black"></div>
      <Social2 />
    </div>
  );
}

function Social1() {
  return (
    <VStacks className="gap-3">
      <Base className="font-bold">संपर्क करा</Base>
      <HStacks className="gap-3">
        {social1.map((item, index) => (
          <a href={item.link} target="_blank" key={index}>
            <Image src={item.icon} alt={item.name} width={40} height={40} />
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
            <Image src={item.icon} alt={item.name} width={40} height={40} />
          </a>
        ))}
      </HStacks>
    </VStacks>
  );
}
