import { createContext, useState, useMemo } from "react";

export const SectionActiveContext = createContext({
  activeSection: "",
  setActiveSection: () => {},
});

export function SectionActiveProvider({ children }) {
  const [activeSection, setActiveSection] = useState("");

  const value = useMemo(
    () => ({ activeSection, setActiveSection }),
    [activeSection]
  );

  return (
    <SectionActiveContext.Provider value={value}>
      {children}
    </SectionActiveContext.Provider>
  );
}
