import React from 'react'
import { Base } from '../typography/FontStyles'
import Body from '../layouts/Body'
import { Stack } from '../layouts/Stacks'
import LinkStacks from './LinkStacks'


export default function Footer() {
  return (
    <footer id='footer' className='px-5 py-5 bg-brand text-white' >
      <Body>
        <Stack className=' items-center justify-between ' >
          <Base className='w-full md:w-[35%] text-[12px] pb-5 pt-2 md:pb-0 md:pr-5 border-b md:border-b-0  md:border-r ' >
            Bhausaheb Bhoir, a leader in Chinchwad, is determined to transform the constituency with his 25 years of political experience! He has championed women's empowerment, education, and road safety, while focusing on the development of arts, sports, and sanitation. Bhoir's fight isn't just about winning elections—it's about turning Chinchwad into a powerful, safe, and prosperous city. The time for change is now, and that change is Bhausaheb Bhoir!
          </Base>
          
          <LinkStacks/>
        </Stack>

        <Base className='pt-5 text-[12px] text-center md:text-left'  >
          © Bhausaheb Bhoir 2024. All rights reserved.
        </Base>
      </Body>
    </footer>
  )
}
