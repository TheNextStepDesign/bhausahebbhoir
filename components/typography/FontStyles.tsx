import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FontStylesProps {
  className?: string;
  children: ReactNode;
}

export function Large({ className, children }:FontStylesProps) {
  return (
    <h1 className={cn('text-[30px] md:text-large font-semibold ', className)}>{children}</h1>
  );
}

export function H1({ className, children }:FontStylesProps) {
    return (
      <h1 className={cn('text-h1 font-semibold ', className)}>{children}</h1>
    );
}

export function H2({ className, children }:FontStylesProps) {
    return (
      <h2 className={cn('font-bold text-h2', className)}>{children}</h2>
    );
}

export function H3({ className, children }:FontStylesProps) {
    return (
      <h3 className={cn('text-h3 font-bold', className)}>{children}</h3>
    );
}

export function Paragraph({ className, children }:FontStylesProps) {
    return (
      <p className={cn('text-paragraph font-normal', className)}>{children}</p>
    );
}

export function Base({ className, children }:FontStylesProps) {
    return (
      <p className={cn('text-base font-light', className)}>{children}</p>
    );
  }
  
  
  