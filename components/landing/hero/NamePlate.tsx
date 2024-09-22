import { Base, H1 } from '@/components/typography/FontStyles'
import React from 'react'

export default function NamePlate() {
  return (
    <div >
            <div className="px-5 py-2.5 bg-brand text-white" >
                <H1  >
                    भाऊसाहेब सोपानराव भोईर 
                </H1>
            </div>

          <div className="px-2.5 py-2.5 bg-accent w-fit" >
                <Base className="font-semibold" >
                    उपाध्यक्ष: अ. भा. म. नाट्य परिषद मध्यवर्ती शाखा, मुंबई
                </Base>
                <Base className="font-semibold" >
                    अध्यक्ष: अ. भा. म. नाट्य परिषद, पिं. चिं. शाखा
                </Base>
    
                <Base className="font-semibold" >
                    सदस्य: जिल्हा नियोजन समिती, पुणे ॰ मा. नगरसेवक: पिं. चिं. मनपा
                </Base>
          </div>

        </div>
  )
}
