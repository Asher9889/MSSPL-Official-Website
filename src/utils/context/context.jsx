import { createContext, useState } from "react";

// Create the context
export const ContactFormContext = createContext();

// Provider 
/* eslint-disable */
export const ContactFormProvider = ({ children }) => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <ContactFormContext.Provider value={{ showContactForm, setShowContactForm }}>
      {children}
    </ContactFormContext.Provider>
  );
};

