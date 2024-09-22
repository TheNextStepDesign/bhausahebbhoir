import { ReactNode } from "react";

type BodyProps = {
  children: ReactNode;
};

const Body = ({children}:BodyProps) => {
    return (
    <div className='w-[90%] md:max-w-[1220px] m-auto py-10' >
        {children}
    </div>
    )
  }
  
  export default Body