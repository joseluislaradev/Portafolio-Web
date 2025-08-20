import { createContext, useState } from "react";

export const SectionActiveContext = createContext();

export function SectionActiveProvider({ children }) {
  const [activeSection, setActiveSection] = useState("");

  return (
    <SectionActiveContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionActiveContext.Provider>
  );
}
