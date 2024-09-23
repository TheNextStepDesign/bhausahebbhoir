import { VStacks } from "@/components/layouts/Stacks";
import Link from "next/link";
import { RevolutionForm } from "./RevolutionForm";
import { ReportForm } from "./ReportForm";
import { Button } from "@/components/ui/Button";

const links = [{ title: "join the revolution", url: "#" },{ title: "share your problem", url: "#" },{ title: "connect with us", url: "#footer" }];


export default function LinkStack() {
  return (
    <VStacks className="gap-2.5 " >
            
            <RevolutionForm/>
            <ReportForm/>
            
              <Link href="#footer" className="" >
            <Button variant="outline" size={'lg'} className="w-full">
                connect with us
            </Button>
              </Link>
            
    </VStacks>
  )
}
