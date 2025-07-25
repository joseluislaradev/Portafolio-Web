import { useState } from "react";
import { Boton } from "../atomos/Boton";

export function Tabs({ tabs, defaultTab }) {
  const [activeTab, setActiveTab] = useState(
    defaultTab || Object.keys(tabs)[0]
  );
  const activeContent = tabs[activeTab];

  return (
    <div>
      <div className="flex gap-4 justify-center mb-10 lg:mb-16">
        {Object.keys(tabs).map((tabName) => (
          <Boton
            key={tabName}
            onClick={() => setActiveTab(tabName)}
            variant="ghostSecondary"
            className={
              activeTab === tabName
                ? "!text-accent-primary-light dark:!text-accent-primary-dark border-b-2 border-accent-primary-light dark:border-accent-primary-dark"
                : ""
            }
          >
            {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
          </Boton>
        ))}
      </div>

      <div>{activeContent}</div>
    </div>
  );
}
