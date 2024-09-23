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
import { Input } from '@/components/ui/Input';

export function RevolutionForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNo: '',
    email: '',
    location: '',
    campaign: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string, name: string) => {
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
        <Button variant="outline" size={'lg'} className='p-0 shadow-xl' >join the revolution</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Register for Campaign</AlertDialogTitle>
          <AlertDialogDescription>
            Please fill out the form below to register for the campaign.
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
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="campaign" className="text-right">
                Campaign
              </Label>
              <Select onValueChange={(value) => handleSelectChange(value, 'campaign')}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a campaign" />
                </SelectTrigger>
                <SelectContent className='bg-white' >
                  <SelectItem value="campaign1">Campaign 1</SelectItem>
                  <SelectItem value="campaign2">Campaign 2</SelectItem>
                  <SelectItem value="campaign3">Campaign 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel   >Cancel</AlertDialogCancel>
            <AlertDialogAction type="button" className='bg-brand text-white'  onClick={handleSubmit}>Submit</AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}