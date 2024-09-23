"use client";

import { useState } from 'react'
import {   Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { AlertDialog ,
    AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { Input, Textarea } from '@/components/ui/Input';

export function ReportForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNo: '',
    email: '',
    complaint:''
   
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your server
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size={'lg'} >share your problem</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Register for Campaign</AlertDialogTitle>
          <AlertDialogDescription>
          We value your feedback! Please share any problems or complaints you have noticed, and we'll address them promptly.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fullName" className="text-right">
                Full Name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="mobileNo" className="text-right">
                Mobile No.
              </Label>
              <Input
                id="mobileNo"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="complaint" className="text-right">
                Complaint
              </Label>
              <Textarea
                id="complaint"
                name="complaint"
                value={formData.complaint}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="Enter your complaint here"
              />
            </div>
            
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel   >Cancel</AlertDialogCancel>
            <AlertDialogAction type="button" className='bg-brand text-white'  onClick={handleSubmit}>Submit Complaint</AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}