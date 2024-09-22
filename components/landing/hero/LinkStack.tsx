import { VStacks } from "@/components/layouts/Stacks";
import Link from "next/link";

const links = [{ title: "join the revolution", url: "#" },{ title: "share your problem", url: "#" },{ title: "connect with us", url: "#" }];


export default function LinkStack() {
  return (
    <VStacks className="gap-2.5 pt-24" >
            {
                links.map((link, index) => (
                    <Link className="px-5 py-2.5 bg-gray rounded-xl shadow-lg text-h3 hover:bg-accent font-semibold" key={index} href={link.url}>
                        {link.title}
                    </Link>
                ))
            }
    </VStacks>
  )
}
