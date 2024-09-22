import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface StacksProps {
  className?: string;
  children?: ReactNode;
}
export function HStacks({className,children}:StacksProps) {
  return (
    <div className={cn('flex flex-row',className)} >
        {children}
    </div>
  )
}

export function VStacks({className,children}:StacksProps) {
    return (
      <div className={cn('flex flex-col',className)} >
        {children}
      </div>
    )
}

export function Stack({className,children}:StacksProps){
    return (
      <div className={cn('flex flex-col md:flex-row',className)} >
        {children}
      </div>
    )
}

export function Center({className,children}:StacksProps){
  return (
      <div className={cn('flex justify-center items-center',className)} >
        {children}
      </div>
    )
}