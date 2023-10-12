"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
type Props = {};

const ContactForm = (props: Props) => {
  return (
    <div className="w-5/6 sm:w-1/2 flex flex-col gap-3">
      <div className="flex justify-between mb-4">
        <div className="w-[45%]">
          <Label htmlFor="full_name" className="text-gray-400">
            Full Name
          </Label>
          <Input id="full_name" className="border-b-2 border-gray-500" />
        </div>
        <div className="w-[45%]">
          <Label htmlFor="email_address" className="text-gray-400">
            Email Address
          </Label>
          <Input id="email_address" className="border-b-2 border-gray-500" />
        </div>
      </div>
      <div>
        <Label htmlFor="message" className="text-gray-400">
          Your message
        </Label>
        <Textarea
          id="message"
          className="border-b-2 border-gray-500"
          cols={10}
        />
      </div>

      <Button className="mt-3 bg-blue-500 hover:bg-blue-500 hover:shadow-2xl sm:w-1/5 self-center rounded-[5px] p-3 text-white transition duration-300 ease-in-out ">
        Send Message
      </Button>
    </div>
  );
};

export default ContactForm;
