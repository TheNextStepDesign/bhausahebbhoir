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
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNo: '',
    email: '',
    location: '',
    
  })


  const isFormValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.mobileNo.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.location.trim() !== "" 
     
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // const handleSelectChange = (value: string, name: string) => {
  //   setFormData(prev => ({ ...prev, [name]: value }))
  // }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      const result = await sendEmail({
        subject: "New Campaign Registration from Website",
        text: "New Campaign Registration submitted", // This will be replaced by the emailBody in the sendEmail function
      });
      console.log("Email sent successfully:", result);

      // Handle success (e.g., show a success message)
      setAlertMessage("Your Campaign Registration has been submitted successfully.");
      setIsSuccess(true);
      setShowAlert(true);

      // Clear the form fields after successful submission
      setFormData({
        fullName: "",
        mobileNo: "",
        email: "",
        location: '',
      
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      // Handle error (e.g., show an error message)
      setAlertMessage("Failed to submit your Campaign Registration. Please try again.");
      setIsSuccess(false);
      setShowAlert(true);
    }
  };

  async function sendEmail(emailData: { subject: string; text: string }) {
    const emailBody = `
      Full Name: ${formData.fullName}
      Mobile No: ${formData.mobileNo}
      Email: ${formData.email}
      Complaint: ${formData.location}
      
    `;

    const response = await fetch("/api/form2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: emailData.subject,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return response.json();
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button   className=' bg-brand text-white' >join the revolution</Button>
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
            <div className="grid grid-cols-1 items-center gap-4">
              {/* <Label htmlFor="fullName" className="text-right">
                Full Name
              </Label> */}
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="Enter your Full Name here"
              />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              {/* <Label htmlFor="mobileNo" className="text-right">
                Mobile No.
              </Label> */}
              <Input
                id="mobileNo"
                name="mobileNo"
                type="number"
                value={formData.mobileNo}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="Enter your Mobile No here"
              />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              {/* <Label htmlFor="email" className="text-right">
                Email
              </Label> */}
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="Enter your Email here"
              />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              {/* <Label htmlFor="location" className="text-right">
                Location
              </Label> */}
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="Enter your Location here"
              />
            </div>
            {/* <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="campaign" className="text-right">
                Campaign
              </Label>
              <Select onValueChange={(value) => handleSelectChange(value, 'campaign')}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a campaign" />
                </SelectTrigger>
                <SelectContent className='bg-background' >
                  <SelectItem value="campaign1">Campaign 1</SelectItem>
                  <SelectItem value="campaign2">Campaign 2</SelectItem>
                  <SelectItem value="campaign3">Campaign 3</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              type="button"
              className={`bg-blue-500 text-white`}
              onClick={handleSubmit}
              disabled={!isFormValid()}
            >
              Submit
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>

      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent className={`${isSuccess?"bg-green-400":"bg-red-400"}`} >
          <AlertDialogHeader>
            <AlertDialogTitle>
              {isSuccess ? "Success" : "Error"}
            </AlertDialogTitle>
            <AlertDialogDescription>{alertMessage}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowAlert(false)}>
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AlertDialog>
  )
}