import Link from "next/link";
import { VStacks } from "./layouts/Stacks";
import { Base, H1, H2, Large } from "./typography/FontStyles";

const links = [{ title: "join the revolution", url: "#" },{ title: "share your problem", url: "#" },{ title: "connect with us", url: "#" }];

export default function Test() {
  return (
    <div className="h-screen w-full flex justify-center items-center " >


        {/* <VStacks className="gap-2.5" >
            {
                links.map((link, index) => (
                    <Link className="px-5 py-2.5 bg-gray rounded-xl shadow-lg text-h3 hover:bg-accent" key={index} href={link.url}>
                        {link.title}
                    </Link>
                ))
            }
        </VStacks> */}


        {/* <div >
            <div className="px-5 py-2.5 bg-brand text-white" >
                <H1  >
                    भाऊसाहेब सोपानराव भोईर 
                </H1>
            </div>

          <div className="px-5 py-2.5 bg-accent " >
                <Base className="font-semibold" >
                    उपाध्यक्ष: अ भा म नाट्य परिषद मध्यवर्ती शाखा, मुंबई
                </Base>
                <Base className="font-semibold" >
                    अध्यक्ष: अ भा म नाट्य परिषद, पिं. चिं. शाखा
                </Base>
    
                <Base className="font-semibold" >
                    सदस्य: जिल्हा नियोजन समिती, पुणे ॰ मा. नगरसेवक: पिं. चिं. मनपा
                </Base>
          </div>

        </div> */}


            {/* <div className="" >
                <Large>
                    चिंचवडच्या
                </Large>
                <Large>
                    सर्वांगीण विकासासाठी
                </Large>
                <Large>
                    सुसज्ज!!
                </Large>
            </div> */}

        <div className="max-w-[620px] mr-auto" >
                <H1>
                “मोरया गोसावीची भक्ती हाच माझा पक्ष;
                चापेकरांची क्रांती हेच माझे ध्येय!”
                </H1>
                <Base>
                या चिंचवड च्या उद्धारासाठी मी झटत आलोय आणि झटत राहणार .
                </Base>
        </div>
        
        
    </div>
  )
}
