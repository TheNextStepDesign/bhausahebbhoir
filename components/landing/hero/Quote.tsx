import { Large } from '@/components/typography/FontStyles'


export default function Quote() {
  return (
    <div className="text-white" >
    <div className='hidden md:block' >
      <Large>
          चिंचवडच्या
      </Large>
      <Large>
          सर्वांगीण विकासासाठी
      </Large>
      <Large>
          सुसज्ज!!
      </Large>
    </div>


    <div className='md:hidden' >
    <Large>
        चिंचवडच्या सर्वांगीण 
      </Large>
      <Large>
        विकासासाठी सुसज्ज!!
      </Large>

    </div>
</div>
  )
}
