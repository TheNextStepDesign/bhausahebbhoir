import { Base, H1, H2 } from '@/components/typography/FontStyles'
import React from 'react'

export default function NamePlate() {
  return (
    <div >
            <div className="px-5 py-2.5 bg-brand text-white" >
                <H2  >
                    भाऊसाहेब सोपानराव भोईर 
                </H2>
            </div>

          <div className="px-2.5 py-2.5 bg-accent w-fit" >
                <Base className="font-semibold text-sm" >
                    उपाध्यक्ष: अ. भा. म. नाट्य परिषद मध्यवर्ती शाखा, मुंबई
                </Base>
                <Base className="font-semibold text-sm" >
                    अध्यक्ष: अ. भा. म. नाट्य परिषद, पिं. चिं. शाखा
                </Base>
    
                <Base className="font-semibold text-sm" >
                    सदस्य: जिल्हा नियोजन समिती, पुणे ॰ मा. नगरसेवक: पिं. चिं. मनपा
                </Base>
          </div>

        </div>
  )
}
