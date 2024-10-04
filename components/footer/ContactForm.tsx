"use client";

import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
 
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
 
} from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

import { Input, Textarea } from "@/components/ui/Input";

export function ContactForm() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });


  const isFormValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== ""
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      const result = await sendEmail({
        subject: "New Massage from Website",
        text: "New complaint submitted", // This will be replaced by the emailBody in the sendEmail function
      });
      console.log("Email sent successfully:", result);

      // Handle success (e.g., show a success message)
      setAlertMessage("Your massage has been submitted successfully.");
      setIsSuccess(true);
      setShowAlert(true);

      // Clear the form fields after successful submission
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send massage:", error);
      // Handle error (e.g., show an error message)
      setAlertMessage("Failed to submit your massage. Please try again.");
      setIsSuccess(false);
      setShowAlert(true);
    }
  };

  
  async function sendEmail(emailData: { subject: string; text: string }) {
    const emailBody = `
      Full Name: ${formData.fullName}
      Email: ${formData.email}
      Message: ${formData.message}
    `;

    const response = await fetch("/api/form1", {
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
      throw new Error("Failed to send massage");
    }

    return response.json();
  }

  return (
    <div  >
        <form>
          <div className="grid gap-4 py-1 text-black">
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
                placeholder=" Full Name "
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
                placeholder=" Email "
              />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              {/* <Label htmlFor="complaint" className="text-right">
                Complaint
              </Label> */}
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="col-span-3 text-black"
                placeholder="message "
              />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              {/* <Label htmlFor="complaint" className="text-right">
                Complaint
              </Label> */}
              <Button
              type="button"
              className={`bg-blue-500 text-white`}
              onClick={handleSubmit}
              disabled={!isFormValid()}
            >
              Send
            </Button>
            </div>
          </div>

        </form>
      
      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent className={`${isSuccess?"bg-green-400":"bg-red-400"}`} >
          <AlertDialogHeader>
            <AlertDialogTitle>
              {isSuccess ? "Success" : "Error"}
            </AlertDialogTitle>
            <AlertDialogDescription>{alertMessage}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowAlert(false)} className="" >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
