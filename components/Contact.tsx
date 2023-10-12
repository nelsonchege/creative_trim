import React from "react";
import ContactForm from "./ContactForm";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="w-full flex justify-center items-center py-7">
      <ContactForm />
    </div>
  );
};

export default Contact;
